/*
 * Index 
 * 组件说明
 * @author iinterest, 
 */

import React, {
    Component,
    PropTypes
} from 'react';

import {
    View,
    StyleSheet,
    Text,
} from 'react-native';

import {
    immutableRenderDecorator,
    shallowEqualImmutable
} from 'react-immutable-render-mixin';

import BarExample from './Bars';
import ButtonExample from './Buttons';
import LoadingExample from './Loadings';
import TabExample from './Tabs';


class Index extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <TabExample />
            </View>
        )
    }
}
export default immutableRenderDecorator(Index);

let styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});