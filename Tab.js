/*
 * Tab
 * 选项栏
 * @author iinterest
 */

import React, {
    Component,
    PropTypes
} from 'react';

import {
    InteractionManager,
    ScrollView,
    StyleSheet,
    View,
    Text,
    TouchableOpacity
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


class Tab extends Component {
    static defaultProps = {
        theme: THEME,
        primary: PRIMARY,
        activeIndex: 0,
        itemCountPrePage: 4,
    };
    static propTypes = {
        theme: PropTypes.oneOf(THEME_NAME),
        primary: PropTypes.oneOf(COLOR_NAME),
        customTabStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
        customHighlightStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
        activeIndex: PropTypes.number,
        items: PropTypes.array.isRequired,
        itemCountPrePage: PropTypes.number,
        onPressHandle:  PropTypes.func.isRequired,
    };
    constructor(props) {
        super(props);
        const {itemCountPrePage} = this.props;
        this.stepWidth = util.pw / itemCountPrePage;
    }
    componentWillReceiveProps(nextProps) {
        const {items, itemCountPrePage, activeIndex} = this.props;
        const direction = activeIndex - nextProps.activeIndex < 0 ? 'right' : 'left';
        const itemLength = items.length;
        let x;

        if (itemLength > itemCountPrePage) {
            const activePostion = nextProps.activeIndex + 1;
            if (direction === 'right' && activePostion > 2) {
                x = this.stepWidth * (activePostion - 2);
            } else if (direction === 'left' && itemLength - activePostion >= 2) {
                x = this.stepWidth * (activePostion - 3);
                x = x <= 0 ? 1 : x;
            }
            if (x) {
                this.scrollView.scrollTo({
                    x: x,
                    animated: true,
                });
            }
        }
    }
    setStyle() {
        const {primary, depth} = this.props;
        const primaryColor = depth ? COLOR[`${primary}${depth}`] : COLOR[`${primary}500`];

        this.iStyle = {
            light: {
                color: primaryColor,
                iconColor: primaryColor,
                backgroundColor: '#fff',
            },
            dark: {
                color: 'rgba(255,255,255,.87)',
                iconColor:'rgba(255,255,255,.87)',
                backgroundColor: primaryColor,
            },
        }
    }
    render() {
        const {theme, children, items, itemCountPrePage, activeIndex, onPressHandle, customTabStyle, customHighlightStyle} = this.props;
        this.setStyle();
        let tabStyle = {
            backgroundColor: this.iStyle[theme].backgroundColor
        }
        let itemStyle = {
            width: util.pw / itemCountPrePage,
        }
        let child = null;
        const tabItems = items.map((item, index) => {
            let textColor = theme === 'dark' ? 'rgba(255,255,255,.54)' : 'rgba(0,0,0,.54)';
            let highlightStyle = {
                borderBottomWidth: 2,
                borderColor: 'transparent',
            };
            if (activeIndex === index) {
                highlightStyle.borderColor = this.iStyle[theme].iconColor;
                highlightStyle = Object.assign(highlightStyle, customHighlightStyle);
                textColor = this.iStyle[theme].color;
            }
            children.forEach((item, i) => {
                if (children[i] && children[i].props.tabIndex === index) {
                    child = children[i];
                    return;
                }
            });
            
            return (
                <TouchableOpacity
                    key={index}
                    style={[styles.tabItems, itemStyle, highlightStyle]}
                    onPress={() => onPressHandle(index)}
                >
                    <Text style={{color:textColor, textAlign:'center'}} numberOfLines={2}>{item.text}</Text>
                    {child}
                </TouchableOpacity>
            );
        });
        
        return (
            <View style={[styles.tabBar, tabStyle, customTabStyle]}>
                <ScrollView
                    ref={scrollView => {this.scrollView = scrollView;}}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                >
                    {tabItems}
                </ScrollView>
            </View>
        )
    }
}
export default immutableRenderDecorator(Tab);

const styles = StyleSheet.create({
    tabBar: {
        flexDirection: 'row',
        height: 48,
    },
    tabItems: {
        flexDirection: 'row',
        height: 48,
        paddingRight: 12,
        paddingLeft: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
});