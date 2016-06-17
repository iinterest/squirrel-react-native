/*
 * TabExample
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

import Tab from '../Tab';
import Button from '../Button';


class TabExample extends Component {
    static propTypes = {
        
    };
    state = {
        activeIndexOne: 0,
        activeIndexTwo: 0,
    };
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            
        });
    }
    updateActiveIndexOne(index) {
        this.setState({
            activeIndexOne: index
        });
    }
    updateActiveIndexTwo(index) {
        this.setState({
            activeIndexTwo: index
        });
    }
    render() {
        const itemsOne = [
            { text: 'ONE' },
            { text: 'TWO' },
            { text: 'THREE' },
            { text: 'FOUR' },
            { text: 'FIVE' },
            { text: 'SIX' },
            { text: 'SEVEN' },
        ]
        const itemsTwo = [
            { text: 'ITEM ONE' },
            { text: 'ITEM TWO' },
            { text: 'ITEM THREE' },
            { text: 'ITEM FOUR' },
            { text: 'ITEM FIVE' },
            { text: 'ITEM SIX' },
            { text: 'ITEM SEVEN' },
        ];
        return (
            <View style={styles.container}>
                <Tab
                    theme="light"
                    items={itemsOne}
                    activeIndex={this.state.activeIndexOne}
                    onPressHandle={this.updateActiveIndexOne.bind(this)}
                />
                <Button
                    text="切换到第三个选项"
                    raised={true}
                    customButtonStyle={{marginTop: 27, marginBottom: 27}}
                    onPressHandle={this.updateActiveIndexOne.bind(this, 2)}
                />
                <Tab
                    theme="dark"
                    primary="googleRed"
                    customHighlightStyle={{borderColor: '#f4c7c3'}}
                    items={itemsTwo}
                    activeIndex={this.state.activeIndexTwo}
                    onPressHandle={this.updateActiveIndexTwo.bind(this)}
                />
            </View>
        )
    }
}
export default immutableRenderDecorator(TabExample);

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