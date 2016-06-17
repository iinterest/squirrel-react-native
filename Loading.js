/*
 * Loading 
 * 加载指示器
 * @author iinterest
 */

import React, {
    Component,
    PropTypes
} from 'react';

import {
    ActivityIndicatorIOS,
    Platform,
    ProgressBarAndroid,
    StyleSheet,
    View,
    Text,
} from 'react-native';

import {
    immutableRenderDecorator,
    shallowEqualImmutable
} from 'react-immutable-render-mixin';

// commons
import {THEME_NAME, COLOR_NAME, THEME, COLOR, PRIMARY} from './color';
import {TYPO} from './typography'
import layout from './layout';
import util from './util';


class Loading extends Component {
    static defaultProps = {
        theme: THEME,
        primary: PRIMARY,
        layout: 'vertical',
        size: 'normal'
    };
    static propTypes = {
        theme: PropTypes.oneOf(THEME_NAME),
        primary: PropTypes.oneOf(COLOR_NAME),
        text: PropTypes.string,
        layout: PropTypes.oneOf(['vertical', 'horizontal']),
        size: PropTypes.oneOf(['large', 'normal', 'small']),
    };
    constructor(props) {
        super(props);
    }
    setStyle() {
        const {primary, depth} = this.props;
        const primaryColor = depth ? COLOR[`${primary}${depth}`] : COLOR[`${primary}500`];
        
        this.iStyle = {
            light: {
                color: primaryColor,
                text: {
                    color: 'rgba(0,0,0,.54)',
                }
            },
            dark: {
                color: 'rgba(255,255,255,.87)',
                text: {
                    color: 'rgba(255,255,255,.54)',
                }
            },
        }
    }
    render() {
        const {theme, layout, size, text} = this.props;
        this.setStyle();
        let loadingStyle = {
            color: this.iStyle[theme].color,
            size: (function () {
                if (util.os === 'android') {
                    if (size === 'normal') {
                        return 'Inverse';
                    } else {
                        return size.replace(/^\S/,function(s){return s.toUpperCase();})
                    }
                } else if (util.os === 'ios') {
                    if (size === 'normal') {
                        return 'small';
                    } else {
                        return size;
                    }
                }
            }())
        };
        let textStyle = {
            fontSize: 14,
            color: this.iStyle[theme].text.color,
        }
        
        switch (layout) {
            case 'vertical':
                loadingStyle = Object.assign(loadingStyle, {
                    style: [styles.vertical],
                });
                textStyle = Object.assign(textStyle, {marginTop: 5,});
                break;
            case 'horizontal':
                loadingStyle = Object.assign(loadingStyle, {
                    styleContainer: [styles.row],
                    style: [styles.horizontal],
                });
                break;
        }

        const LoadingIndicator = util.os === 'android' ?
            <ProgressBarAndroid
                styleAttr={loadingStyle.size}
                style={loadingStyle.style}
                color={loadingStyle.color}
            /> :
            <ActivityIndicatorIOS
                animating={true}
                size={loadingStyle.size}
                style={loadingStyle.style}
                color={loadingStyle.color}
            />;

        const Wording = text ? <Text style={textStyle}>{text}</Text> : null;
        
        return (
            <View style={[styles.container, loadingStyle.styleContainer]}>
                {LoadingIndicator}
                {Wording}
            </View>
        )
    }
}
export default immutableRenderDecorator(Loading);

const styles = util.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    row: {
        flexDirection: 'row',
    },
    vertical: {
        ios: {
            height: 80,
        },
    },
    horizontal: {
        android: {
            marginRight: 6,
        },
        ios: {
            height: 30,
        }
    },
});