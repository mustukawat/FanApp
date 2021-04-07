import  React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Flatlist,
  TouchableOpacity,
  FlatList
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import {Container} from '../styles/container';

const links = [
  { title: 'Films' },
  {title:'About'}
]

class StarWars extends Component{

  static navigationOptions = {
    headerTitle: <Text style={{
      fontSize: 34, color: 'rgb(255,232,31)',
    }}>StarWars</Text>,
    headerStyle:{backgroundColor : "black", height:110}
  }
  navigate = (links) => {
    const { navigate } = this.props.navigate
    navigate(links)
  }
  renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => this.navigate(item.title)}
        style={[style.item, { borderTopWidth: index === 0 ? 1 : null }]}>
        <Text style={style.text}>{item.title}</Text>
      </TouchableOpacity>
    )
  }
   
  render() {
    return (
      <Container>
        <FlatList
          data={links}
          keyExtractor={(items) => item.title}
          renderItem={this.renderItem}
        />
      </Container>
    )
  }

}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    justifyContent: 'center',
    borderColor: 'rgba(255,232,31,.2',
    borderBottomWidth:1
  },
  text: {
    color: 'ffe81f',
    fontSize:18
  }
})


const App = createStackNavigator({
  StarWars: {
    Screen: StarWars,
  },
  Films: {
    screen:Films
  },
  Characters: {
    Screen:Characters
  },
  About: {
    Screen:About
  }
})
