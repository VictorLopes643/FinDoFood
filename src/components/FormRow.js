import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FormRow = props => {
    const { children } = props;
    return (
        <View >
            { children }
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 10,
        backgroundColor: 'blue',
        marginTop: 5,
        marginBottom: 5,
        elevation:2

    }
})
export default FormRow;