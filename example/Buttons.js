/*
 * ButtonExample 
 * 组件说明
 * @author iinterest, 
 */

import React, {
    Component,
    PropTypes
} from 'react';

import {
    ScrollView,
    StyleSheet,
    View,
    Text,
} from 'react-native';

import {
    immutableRenderDecorator,
    shallowEqualImmutable
} from 'react-immutable-render-mixin';

// common
import util from '../util';

// components
import Button from '../Button';
import IconButton from '../IconButton';
import Icon from 'react-native-vector-icons/MaterialIcons';


class ButtonExample extends Component {
    static propTypes = {
        
    };
    constructor(props) {
        super(props);
    }
    onButtonClicked() {
        
    }
    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.subHeader}>
                    <Text>按钮类型</Text>
                </View>
                <View style={styles.type}>
                    <Button
                        text="Raised One"
                        raised={true}
                    />
                    <Button
                        text="Raised Two"
                        raised={true}
                    />
                </View>
                <View style={styles.type}>
                    <Button
                        text="Flat One"
                    />
                    <Button
                        text="Flat Two"
                    />
                </View>
                
                
                <View style={styles.block}>
                    <View style={styles.subHeader}>
                        <Text>块级按钮</Text>
                    </View>
                    <Button
                        text="Button One"
                        raised={true}
                    />
                    <Button
                        text="Button One"
                    />
                    
                    
                    <View style={styles.subHeader}>
                        <Text>禁用状态</Text>
                    </View>
                    <View>
                        <Button
                            text="Button Raised Light Disable"
                            theme="light"
                            raised={true}
                            disabled={true}
                        />
                        <Button
                            text="Button Flat Light Disable"
                            theme="light"
                            disabled={true}
                        />
                    </View>
                    <View style={styles.dark}>
                        <Button
                            text="Button Raised Dark Disable"
                            raised={true}
                            disabled={true}
                        />
                        <Button
                            text="Button Flat Dark Disable"
                            disabled={true}
                        />
                    </View>
                    
                    <View style={styles.subHeader}>
                        <Text>加载状态</Text>
                    </View>
                    <Button
                        text="Button Disable"
                        raised={true}
                        onLoading={true}
                    />
                </View>

                
                <View style={styles.subHeader}>
                    <Text>内联按钮</Text>
                </View>
                <View style={styles.inline}>
                    <Button
                        text="One"
                        raised={true}
                    />
                    <Button
                        text="Two"
                        raised={true}
                    />
                    <Button
                        text="Three"
                        raised={true}
                    />
                    <Button
                        text="Four"
                        raised={true}
                    />
                </View>

                <View style={styles.subHeader}>
                    <Text>按钮颜色</Text>
                </View>
                <View style={[styles.inline, styles.dark]}>
                    <Button
                        text="GoogleRed Raised Dark"
                        raised={true}
                        primary="googleRed"
                    />
                    <Button
                        text="GoogleRed Flat Dark"
                        primary="googleRed"
                    />
                </View>
                <View style={[styles.inline, styles.dark]}>
                    <Button
                        text="GoogleGreen Raised Dark"
                        raised={true}
                        primary="googleGreen"
                    />
                    <Button
                        text="GoogleGreen Flat Dark"
                        primary="googleGreen"
                    />
                </View>
                <View style={styles.inline}>
                    <Button
                        text="GoogleRed Raised Light"
                        raised={true}
                        theme="light"
                        primary="googleRed"
                    />
                    <Button
                        text="GoogleRed Flat Light"
                        theme="light"
                        primary="googleRed"
                    />
                </View>
                
                <View style={styles.inline}>
                    <Button
                        text="GoogleGreen Raised Light"
                        raised={true}
                        theme="light"
                        primary="googleGreen"
                    />
                    <Button
                        text="GoogleGreen Flat Light"
                        theme="light"
                        primary="googleGreen"
                    />
                </View>

                <View style={styles.subHeader}>
                    <Text>指定按钮颜色</Text>
                </View>
                <View style={styles.block}>
                    <Button
                        text="GoogleRed Depth 700 Raised Dark"
                        raised={true}
                        primary="googleRed"
                        depth="700"
                    />
                    <Button
                        text="GoogleGreen Depth 300 Flat Dark"
                        raised={true}
                        primary="googleGreen"
                        depth="300"
                    />
                </View>

                <View style={styles.space}></View>
            </ScrollView>
        )
    }
}
export default immutableRenderDecorator(ButtonExample);

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
    block: {
        
    },
    inline: {
        flexDirection: 'row',
    },
    type: {
        flexDirection: 'row',
    },
    dark: {
        backgroundColor: '#333',
    }
});