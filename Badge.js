/*
 * Badge 
 * 徽章组件
 * @author iinterest, 
 */

import React, {
    Component,
    PropTypes
} from 'react';

import {
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


class Badge extends Component {
    static defaultProps = {
        theme: THEME,
        primary: PRIMARY,
    };
    static propTypes = {
        theme: PropTypes.oneOf(THEME_NAME),
        primary: PropTypes.oneOf(COLOR_NAME),
        customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
        count: PropTypes.number.isRequired,
    };
    constructor(props) {
        super(props);
    }
    render() {
        const { count, customStyle } = this.props;
        let displayCount = count > 99 ? '...' : count;
        
        return(
            <View style={[styles.badge, customStyle]}>
                <Text style={styles.count}>{displayCount}</Text>
            </View>
        )
    }
}
export default immutableRenderDecorator(Badge);
export const undecorated = Badge;

const styles = StyleSheet.create({
    badge: {
        width: 18,
        height: 18,
        paddingLeft: 4,
        paddingRight: 4,
        borderRadius: 99,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fb6a2e',
    },
    count: {
        fontSize: 8,
        color: '#fff'
    }
});