/*
 * BarExample 
 * 组件说明
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

import Bar from '../Bar';
import IconButton from '../IconButton';
import Icon from 'react-native-vector-icons/MaterialIcons';


class BarExample extends Component {
    static propTypes = {
        //example: PropTypes.any.isRequired,
    };
    constructor(props) {
        super(props);
    }
    onMenuClicked() {
        
    }
    onButtonClicked() {
        
    }
    render() {
        const MenuButton = 
            <IconButton
                key="MenuButton"
                onPressHandle={this.onMenuClicked.bind(this)}
            >
                <Icon name="menu" size={24} />
                {/*<View style={styles.redDot} />*/}
            </IconButton>;
        
        const SearchButton =
            <IconButton
                key="SearchButton"
                onPressHandle={this.onButtonClicked.bind(this)}
            >
                <Icon name='search' size={24} />
            </IconButton>;

        const MoreButton =
            <IconButton
                key="MoreButton"
                onPressHandle={this.onButtonClicked.bind(this)}
            >
                <Icon name='more-vert' size={24} />
            </IconButton>;
        
        const notificationButton =
            <IconButton
                key="notificationButton"
                onPressHandle={this.onButtonClicked.bind(this)}
            >
                <Icon name='notifications-none' size={24} />
            </IconButton>;

        const placeHolder = <View></View>;
        
        const TabButton1 =
            <IconButton
                key="TabButton1"
                customStyle={styles.tabTrigger}
                onPressHandle={this.onButtonClicked.bind(this)}
            >
                <Icon name='home'
                    size={26}
                    />
                <Text style={styles.tabText}>首页</Text>
            </IconButton>;

        const TabButton2 =
            <IconButton
                key="TabButton2"
                onPressHandle={this.onButtonClicked.bind(this)}
            >
                <Icon name='lightbulb-outline' size={26} />
                <Text style={styles.tabText}>功能建议</Text>
            </IconButton>;

        const TabButton3 =
            <IconButton
                key="TabButton3"
                onPressHandle={this.onButtonClicked.bind(this)}
            >
                <Icon name='inbox' size={26} />
                <Text style={styles.tabText}>问题反馈</Text>
            </IconButton>;

        const TabButton4 =
            <IconButton
                key="TabButton4"
                onPressHandle={this.onButtonClicked.bind(this)}
            >
                <Icon name='bubble-chart' size={26} />
                <Text style={styles.tabText}>主题壁纸</Text>
            </IconButton>;

        const TabButton5 =
            <IconButton
                key="TabButton5"
                onPressHandle={this.onButtonClicked.bind(this)}
            >
                <Icon name='whatshot' size={26} />
                <Text style={styles.tabText}>灌水区</Text>
            </IconButton>;
        
        return (
            <View style={styles.container}>
                <Bar
                    text="首页"
                    type="nav"
                    buttons={[MenuButton, SearchButton]}
                />
                <Bar
                    text="Squirrel Bar"
                    type="toolbar"
                    buttons={[placeHolder, notificationButton, MoreButton]}
                />
                <Bar
                    type="tab"
                    buttons={[TabButton1, TabButton2, TabButton3, TabButton4, TabButton5]}
                />
            </View>
        )
    }
}

export default immutableRenderDecorator(BarExample);

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
    redDot: {
        position: 'absolute',
        top: 9,
        right: 6,
        width: 6,
        height: 6,
        borderRadius: 99,
        backgroundColor: '#fb6a2e'
    },
    tabTrigger: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabText: {
        fontSize: 8,
    }
});