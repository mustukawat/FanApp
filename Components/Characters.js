import React from 'react';
import { render } from 'react-dom';
import {
    Text,
    View,
    StyleSheet,
    ActivityIndicator
} from 'react-native';


const TextContainer = ({ label, info }) => {
    <Text style={style.text}>{label}:{info}</Text>
}


export default class Characters extends React.Component{
    state =  {
        data: {},
        loading:true
    }
}

componentDidMount() {
    if (!this.props.URL) return
    const URL = this.props.URL.replace(/^http:\/\//i, 'https://')
    fetch(URL)
        .then(res => res.json())
        .then(json => {
        this.setState({data:json,loading:false})
        })
        .catch((err) => console.log('err:', err))
    
    render(){
        const { data } = this.data
        return (
            <View styles={styles.container}>
                {
                    this.state.loading ? (
                        <ActivityIndicator color='#ffe81f'/>
                    ) : (
                            <View style={styles.CharacterInfoContainer}>
                                <TextContainer label="Name" info={data.name} />
                                <TextContainer label="Gender" info={data.gender} />
                                <TextContainer label="Height" info={data.height} />
                                <TextContainer label="Skin_color" info={data.skin_color} />
                                <Text
                                    style={styles.closeButton}
                                    onPress={this.props.closeModal}>
                                    Close Modal
                                </Text>
                            </View>
                    )
                }

            </View>
        )
    }
    
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        paddingTop:20
        
    },
    HomeWorldinfoContainer: {
        padding:20
    },
    text: {
        color:'#ffe81f'
    },
    closeButton: {
        paddingTop: 20,
        color: 'white',
        fonstSize:14
    }

})