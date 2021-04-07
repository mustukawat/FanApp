import React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'black'
    },

})

const Container = ({Children}) => {
    <View style={styles.container}>
        {Children}
    </View>
}
export default  Container