/*
 * Button 
 * 按钮
 * @author iinterest
 */

import React, {
    Component,
    PropTypes
} from 'react';

import {
    ActivityIndicatorIOS,
    ProgressBarAndroid,
    StyleSheet,
    View,
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


export default class Button extends Component {
    static defaultProps = {
        theme: THEME,
        primary: PRIMARY,
        disabled: false,
    };
    static propTypes = {
        theme: PropTypes.oneOf(THEME_NAME),
        primary: PropTypes.oneOf(COLOR_NAME),
        text: PropTypes.string,
        disabled: PropTypes.bool,
        raised: PropTypes.bool,
        onPressHandle:  PropTypes.func,
        onLoading: PropTypes.bool,
        indicatorColor: PropTypes.string,
        customButtonStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
        customTextStyle: PropTypes.oneOfType([PropTypes.object,PropTypes.number]),
    };
    constructor(props) {
        super(props);
    }
    setStyle() {
        const {primary, depth} = this.props;
        const primaryColor = depth ? COLOR[`${primary}${depth}`] : COLOR[`${primary}500`];
        this.iStyle = {
            flat: {
                light: {
                    backgroundColor: 'transparent',
                    color: primaryColor,
                    iconColor: primaryColor,
                    disabled: {
                        color: 'rgba(0,0,0,.26)',
                    }
                },
                dark: {
                    backgroundColor: 'transparent',
                    color: primaryColor,
                    iconColor: primaryColor,
                    disabled: {
                        color: 'rgba(255,255,255,.3)',
                    }
                },
            },
            raised: {
                light: {
                    color: primaryColor,
                    iconColor: primaryColor,
                    button: {
                        backgroundColor: '#fff',
                        borderWidth: StyleSheet.hairlineWidth,
                        borderColor: primaryColor,
                    },
                    disabled: {
                        color: 'rgba(0,0,0,.26)',
                        button: {
                            backgroundColor: 'rgba(0,0,0,.12)',
                            borderWidth: StyleSheet.hairlineWidth,
                            borderColor: 'rgba(0,0,0,.12)',
                        },
                    }
                },
                dark: {
                    color: 'rgba(255,255,255,.87)',
                    iconColor: 'rgba(255,255,255,.87)',
                    button: {
                        backgroundColor: primaryColor,
                    },
                    disabled: {
                        color: 'rgba(255,255,255,.3)',
                        button: {
                            backgroundColor: 'rgba(255,255,255,.12)',
                            borderWidth: StyleSheet.hairlineWidth,
                            borderColor: 'rgba(0,0,0,.12)',
                        },
                    }
                },
            },
        }
    }
    render() {
        const {theme, text, disabled, raised, onPressHandle, onLoading, indicatorColor, customButtonStyle, customTextStyle} = this.props;
        this.setStyle();
        
        const shape = raised ? 'raised' : 'flat';
        let textStyle = {
            color: this.iStyle[shape][theme].color,
        }
        let buttonStyle = {
            ...this.iStyle[shape][theme].button,
        }
        
        if (disabled) {
            textStyle = {
                color: this.iStyle[shape][theme].disabled.color,
            }
            buttonStyle = {
                ...this.iStyle[shape][theme].disabled.button,
            }
        }
        
        
        const LoadingIndicator = util.os === 'android' ?
            <ProgressBarAndroid
                styleAttr={'Small'}
                color={indicatorColor || this.iStyle[shape][theme].iconColor}
            />
            :
            <ActivityIndicatorIOS
                animating={true}
                size={'small'}
                color={indicatorColor || this.iStyle[shape][theme].iconColor}
            />;
        const content = onLoading ?
            LoadingIndicator
            :
            <Text style={[
                textStyle,
                customTextStyle
            ]}>
                {text}
            </Text>;
        
        return (
            <TouchableOpacity
                onPress={!disabled ? onPressHandle : undefined}
            >
                <View style={[
                    styles.button,
                    buttonStyle,
                    customButtonStyle,
                ]}>
                    {content}
                </View>
            </TouchableOpacity>
        )
    }
}

let styles = StyleSheet.create({
    button: {
        height: 36,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 6,
        paddingBottom: 6,
        paddingLeft: 16,
        paddingRight: 16,
        margin: 4,
        borderRadius: 2,
    },
});