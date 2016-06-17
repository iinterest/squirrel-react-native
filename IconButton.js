/*
 * IconButton 
 * 图标按钮
 * @author bellhe
 */

import React, {
    Component,
    PropTypes
} from 'react';

import {
    View,
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableOpacity,
} from 'react-native';

import {
    immutableRenderDecorator,
    shallowEqualImmutable
} from 'react-immutable-render-mixin';

// commons
import {THEME_NAME, COLOR_NAME, THEME, COLOR, PRIMARY} from './color';
import layout from './layout';
import util from './util';

// components
import Icon from 'react-native-vector-icons/MaterialIcons';


class IconButton extends Component {
    static defaultProps = {
        theme: THEME,
        primary: PRIMARY,
    };
    static propTypes = {
        theme: PropTypes.oneOf(THEME_NAME),
        primary: PropTypes.oneOf(COLOR_NAME),
        customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
        onPressHandle: PropTypes.func,
    };
    state = {};
    constructor(props) {
        super(props);
    }
    setStyle() {
        const {primary, depth} = this.props;
        const isCustom = primary && primary !== PRIMARY;
        const primaryColor = depth ? COLOR[`${primary}${depth}`] : COLOR[`${primary}500`];
        
        this.iStyle = {
            light: {
                color: primaryColor,
                iconColor: primaryColor,
            },
            dark: {
                color: isCustom ? primaryColor : 'rgba(255,255,255,.87)',
                iconColor: isCustom ? primaryColor : 'rgba(255,255,255,.87)',
            },
        }
    }
    setChildrenStyle(children) {
        if (!children) {
            return;
        }
        if (children.length > 0) {
            return children.map((child, index) => {
                return this.mergeChildrenStyle(child, index);
            });
        } else {
            return this.mergeChildrenStyle(children);
        }
    }
    mergeChildrenStyle(child, index = 0) {
        if (!child) {
            return;
        }
        const {theme} = this.props;
        const childStyle = child.props.style;
        let style = {};
        if (child.type === Icon) {
            style.color = this.iStyle[theme].iconColor;
        } else if (child.type === Text) {
            style.color = this.iStyle[theme].color;
            style.fontSize = 8;
        }
        if (childStyle) {
            style = [style, childStyle]
        }
        return React.cloneElement(child, {style, key: index});
    }
    render() {
        const {children, customStyle, onPressHandle,} = this.props;
        //const buttonStyle = customStyle ? customStyle : styles.iconButton;
        this.setStyle();
        
        return (
            <TouchableOpacity
                style={[styles.iconButton, customStyle]}
                onPress={onPressHandle}>
                {this.setChildrenStyle(children)}
            </TouchableOpacity>
        )
    }
}
export default immutableRenderDecorator(IconButton);


const styles = StyleSheet.create({
    iconButton: {
        width: layout.ICON_BUTTON_SIZE,
        height: layout.ICON_BUTTON_SIZE,
        justifyContent: 'center',
        alignItems: 'center',
    }
});