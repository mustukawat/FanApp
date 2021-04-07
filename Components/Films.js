import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    ActivityIndicator,
    FlatList,
    Modal,
    Picker
} from 'react-native';
import _ from 'lodash';
import {Container} from '../styles/container';
import Characters from '../Components/Characters'
import { render } from 'react-dom';

export default class Films extends Component{
    static navigationOptions = {
        headerTitle = 'Films',
        headerStyle: {
            borderBottomWidth: 1,
            borderBottomColor: 'ffe81f',
            backgroundColor: 'black'
        },
        headerTintColor: 'ffe81f',
        pressColorAndroid:'white'
    }
}

state = {
    data: [],
    loading:true
}

componentDidMount(){
    fetch('https://swapi.dev/api/films/')
        .then(res => res.json())
        .then(json => this.setState({ data: json.result, loading: false }))
        .catch((err)=>console.log('err:',err))   
}

renderItem = ({ item }) => {
    return (
        <View style={StyleSheet.itemContainer}>
            <Text style={Styles.title}>{item.title}</Text>
            <Text style={Styles.episode}>{item.episode_id}</Text>
            <Text style={Styles.title}>{item.director}</Text>
            <Text style={styles.episode}>{ item.release_date}</Text>

        </View>
    )
}

openCharacters = (URL) => {
    this.setState({
        URL,
        modalVisible:true
    })
}

closeModal = () => {
    this.setState({ modalVisible:false})
}
togglePicker = () => {
    this.setState({pickerVisible:!this.state.pickerVisible})
}
render(){
    let {data} = this.state


return (
    <Container>
        
        <TouchableOpacity style={style.pickerToggleContainer}
            onpress={this.togglePicker}>
            <Text style={style.pickerToggle}>
                {this.state.pickerVisible ? 'Close Filter': 'Open Filter'}
            </Text>
        </TouchableOpacity>
        {
            this.state.loading ? <ActivityIndicator color='#ffe81f' /> : (
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.title}
                    renderItem={this.renderItem}
                />
            )
        }
        <Modal
            onRequestClose={() => console.log('on request close called')}
            animationType="slide"
            visible={this.state.modalVisible}>
            <Characters closeModal={this.closeModal}
                URL={this.state.url} />
        </Modal>
        
  </Container>
            );
}
    
const styles = StyleSheet.create({
    itemContainer: {
        padding: 15,
        borderBottomWidth: 1, borderBottomColor: '#ffe81f'
    },
    name: {
        color: '#ffe81f',
        fontSize: 18
    },
    info: {
        color: '#ffe81f',
        fontSize: 14,
        marginTop: 5
    }
});

