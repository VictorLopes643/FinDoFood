import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import LocaisCard from '../../components/LocaisCard';

import firebase from 'firebase';

  export default class LocaisProximos extends Component {
    constructor(props){
      super(props);

      this.state = {
        // AgoraRecebe: []
        pro:[],
      }
    }
 
    


    // componentDidMount(){
   
    //   const firebaseConfig = {
    //   apiKey: "AIzaSyAwjI5Du4Jrbf8zXVKFjyH8w5L4oRJkp2o",
    //   authDomain: "finfood-4fef1.firebaseapp.com",
    //   databaseURL: "https://finfood-4fef1.firebaseio.com",
    //   projectId: "finfood-4fef1",
    //   storageBucket: "finfood-4fef1.appspot.com",
    //   messagingSenderId: "1056002227709",
    //   appId: "1:1056002227709:web:803a20f1bf6a6c5cb6ed94",
    //   measurementId: "G-FXSLK475Z4"
    // };
    // firebase.initializeApp(firebaseConfig);
    // firebase.database().ref('Clientes')
    //   .on('value', (data) => {
    //     console.log(data.val());
    //     this.setState({pro: data.val()});
    // })
    // }
  render(){
    return(
      <View style={styles.container}>
      {/* <View style={styles.fLat}>
        <Text>{`${this.state.pro}`}</Text>
       <FlatList
              data={this.state.pro}
              renderItem={({ item }) => (
               <LocaisCard data={item}
               />
              )}
              keyExtractor={item => item.id}
              // numColumns={2}
            />  
      </View> */}
    <Text>1515151515</Text>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white'
  },
  fLat:{
    // flex:1
  },
  haeder:{
    // flex:1,
    height: 90,
    backgroundColor: 'black'
    
  },  
})