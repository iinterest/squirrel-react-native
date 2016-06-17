/*
 * Bar 
 * 栏条
 * @author iinterest
 */

import React, {
    Component,
    PropTypes
} from 'react';

import {
    Image,
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


class Bar extends Component {
    static defaultProps = {
        theme: THEME,
        primary: PRIMARY,
    };
    static propTypes = {
        theme: PropTypes.oneOf(THEME_NAME),
        primary: PropTypes.oneOf(COLOR_NAME),
        buttons: PropTypes.array,
        divider: PropTypes.bool,
        text: PropTypes.string,
        type: PropTypes.oneOf([
            'toolbar', 'nav', 'pagination', 'tab',
        ]).isRequired,
    };
    state = {};
    constructor(props) {
        super(props);
    }
    setStyle() {
        const {primary} = this.props;
        this.iStyle = {
            light: {
                lightBackgroundColor: '#fff',
                color: 'rgba(0,0,0,.87)',
                divider: {
                    top: {
                        borderTopWidth: StyleSheet.hairlineWidth,
                        borderTopColor: 'rgba(0,0,0,.12)',
                    },
                    bottom: {
                        borderBottomWidth: StyleSheet.hairlineWidth,
                        borderBottomColor: 'rgba(0,0,0,.12)',
                    }
                }
            },
            dark: {
                backgroundColor: COLOR[`${primary}500`],
                color: 'rgba(255,255,255,.87)',
                divider: {
                    top: {
                        borderTopWidth: StyleSheet.hairlineWidth,
                        borderTopColor: 'rgba(0,0,0,.12)',
                    },
                    bottom: {
                        borderBottomWidth: StyleSheet.hairlineWidth,
                        borderBottomColor: 'rgba(0,0,0,.12)',
                    }
                }
            },
            
        }
    }
    renderBarLayout() {
        const {theme, buttons, text, type} = this.props;
        const TitleLayout = text ?
            <View style={[styles.title, styles[type + 'Title']]}>
                <Text
                    style={[
                        {
                            ...TYPO.paperFontTitle,
                            color: this.iStyle[theme].color
                        }
                    ]}
                    numberOfLines={1}
                >{text}</Text>
            </View> :
            null;
        let BarLayout =
            <View style={[styles.bar, styles[type + 'Bar']]}>
                {TitleLayout}
            </View>;
        
        if (!buttons) {
            return BarLayout;
        }
        
        switch (type) {
            case 'nav':
                BarLayout =
                    <View style={[styles.bar, styles[type + 'Bar']]}>
                        {buttons[0]}
                        {TitleLayout}
                        {buttons[1]}
                    </View>;
                break;
            case 'toolbar':
                const extendButtons = buttons.map((button, index) => {
                    if (index > 0) {
                        return button;
                    }
                });
                BarLayout =
                    <View style={[styles.bar, styles[type + 'Bar']]}>
                        {buttons[0]}
                        {TitleLayout}
                        {extendButtons}
                    </View>;
                break;
            case 'tab':
                const btnWidth = util.pw / buttons.length;
                const tabButtons = buttons.map((button, index) => {
                    return (
                        <View
                            key={index}
                            style={[styles.tabButton, {width: btnWidth}]}
                        >
                            {button}
                        </View>
                    )
                });
                BarLayout =
                    <View style={[styles.bar, styles[type + 'Bar']]}>
                        {tabButtons}
                    </View>;
                break;
        }
        return BarLayout;
    }
    render() {
        const {theme, type, divider} = this.props;
        this.setStyle();
        let barStyle = {
            backgroundColor: this.iStyle[theme].backgroundColor
        };
        if (divider) {
            if (type === 'tab') {
                barStyle = Object.assign(barStyle, this.iStyle[theme].divider.top);
            } else {
                barStyle = Object.assign(barStyle, this.iStyle[theme].divider.bottom);
            }
        }
        
        return (
            <View style={[styles.barWrap, barStyle]}>
                {this.renderBarLayout()}
            </View>
        )
    }
}
export default immutableRenderDecorator(Bar);


const styles = StyleSheet.create({
    barWrap: {

    },
    bar: {
        flexDirection: 'row',
        height: layout.BAR_HEIGHT,
    },
    title: {
        height: layout.BAR_HEIGHT,
        justifyContent: 'center',
    },
    // nav
    navBar: {
        justifyContent: 'space-between',
    },
    navTitle: {
        position: 'absolute',
        left: layout.BAR_HEIGHT,
        right: layout.BAR_HEIGHT,
        top: 0,
        bottom: 0,
        alignItems: 'center',
    },
    // tab
    tabBar: {
        flexDirection: 'row',
    },
    tabButton: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    // toolbar
    toolbarBar: {
        
    },
    toolbarTitle: {
        flex: 1,
        marginLeft: 18,
    },
});