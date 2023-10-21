import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export default class RoundButton extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>＋</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
        height: 70,
        marginBottom: 30,
        borderRadius: 35,
        position: 'fixed',
        bottom: 20, // 아래에서 20포인트 떨어진 위치
        right: 20, // 오른쪽에서 20포인트 떨어진 위치
    },

    text: {
        fontSize: 50,
        textAlign: 'center',
        color: 'white'
    }
});
