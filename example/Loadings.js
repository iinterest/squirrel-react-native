/*
 * Loadings
 * 
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

// components
import Loading from '../Loading';


class Loadings extends Component {
    static propTypes = {
        
    };
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.container}>
                    <Loading
                        theme="light"
                        text="加载中"
                    />
                </View>
                <View style={styles.container}>
                    <Loading
                        theme="light"
                        layout="horizontal"
                        size="small"
                        text="加载中"
                    />
                </View>
            </View>
        )
    }
}
export default immutableRenderDecorator(Loadings);

let styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    subHeader: {
        padding: 16
    },
    space: {
        height: 100,
    },
    dark: {
        backgroundColor: '#333',
    }
});