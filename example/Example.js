/*
 * Example
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


class Example extends Component {
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
                <Text>Example</Text>
            </View>
        )
    }
}
export default immutableRenderDecorator(Example);

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
});