/*
 * BarExample 
 * 栏条示例
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

//import Bar from '../Bar';
//import IconButton from '../IconButton';
import {
    COLOR,
    TYPO,
    Bar,
    IconButton,
} from '../../squirrel-react-native';

import {THEME, PRIMARY} from '../../config';

import Icon from 'react-native-vector-icons/MaterialIcons';


class BarExample extends Component {
    static propTypes = {
        
    };
    constructor(props) {
        super(props);
    }
    onButtonClicked() {
        
    }
    render() {
        const MenuButton = 
            <IconButton
                key="MenuButton"
                onPressHandle={this.onButtonClicked.bind(this)}
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
        
        const NavButton1 =
            <IconButton
                key="NavButton1"
                onPressHandle={this.onButtonClicked.bind(this)}
            >
                <Icon name='home'size={26} />
                <Text style={styles.tabText}>首页</Text>
            </IconButton>;

        const NavButton2 =
            <IconButton
                key="NavButton2"
                onPressHandle={this.onButtonClicked.bind(this)}
            >
                <Icon name='lightbulb-outline' size={26} />
                <Text style={styles.tabText}>功能建议</Text>
            </IconButton>;

        const NavButton3 =
            <IconButton
                key="NavButton3"
                onPressHandle={this.onButtonClicked.bind(this)}
            >
                <Icon name='inbox' size={26} />
                <Text style={styles.tabText}>问题反馈</Text>
            </IconButton>;

        const NavButton4 =
            <IconButton
                key="NavButton4"
                onPressHandle={this.onButtonClicked.bind(this)}
            >
                <Icon name='bubble-chart' size={26} />
                <Text style={styles.tabText}>主题壁纸</Text>
            </IconButton>;

        const NavButton5 =
            <IconButton
                key="NavButton5"
                onPressHandle={this.onButtonClicked.bind(this)}
            >
                <Icon name='whatshot' size={26} />
                <Text style={styles.tabText}>灌水区</Text>
            </IconButton>;
        
        return (
            <View style={styles.container}>
                
                <View style={styles.subHeader}>
                    <Text style={styles.h2}>工具栏 toolbar</Text>
                </View>
                <View style={styles.subHeader}>
                    <Text style={styles.h3}>默认布局:</Text>
                </View>
                <Bar
                    title="Squirrel Bar"
                    type="toolbar"
                    items={[MenuButton, notificationButton, MoreButton]}
                />
                
                <View style={styles.subHeader}>
                    <Text style={styles.h3}>居中布局:</Text>
                </View>
                <Bar
                    title="首页"
                    type="toolbar"
                    layoutGravity="center"
                    items={[MenuButton, SearchButton]}
                />

                <View style={styles.subHeader}>
                    <Text style={styles.h2}>底部导航 Bottom navigation</Text>
                </View>
                <Bar
                    type="nav"
                    items={[NavButton1, NavButton2, NavButton3, NavButton4, NavButton5]}
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
    dividers: {
        height: 1,
        backgroundColor: '#ddd',
        marginTop: 16,
        marginBottom: 16,
    },
    subHeader: {
        padding: 16
    },
    h2: {
        fontSize: 18,
        fontWeight: '500',
    },
    h3: {
        fontSize: 14,
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