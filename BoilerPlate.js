/*
 * BoilerPlate
 * 样板
 * @author iinterest
 */

import React, {
    Component,
    PropTypes
} from 'react';

import {
    InteractionManager,
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


class BoilerPlate extends Component {
    static defaultProps = {
        theme: THEME,
        primary: PRIMARY,
    };
    static propTypes = {
        theme: PropTypes.oneOf(THEME_NAME),
        primary: PropTypes.oneOf(COLOR_NAME),
        customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    };
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            
        });
    }
    setStyle() {
        const {primary, depth} = this.props;
        const isCustom = primary && primary !== PRIMARY;
        const primaryColor = depth ? COLOR[`${primary}${depth}`] : COLOR[`${primary}500`];

        this.iStyle = {
            light: {
                color: primaryColor,
                iconColor: primaryColor,
                backgroundColor: '#fff',
            },
            dark: {
                color: 'rgba(255,255,255,.87)',
                iconColor: 'rgba(255,255,255,.87)',
                backgroundColor: primaryColor,
            },
        }
    }
    render() {
        this.setStyle();
        return (
            <View style={styles.container}>
                <Text>BoilerPlate</Text>
            </View>
        )
    }
}
export default immutableRenderDecorator(BoilerPlate);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});