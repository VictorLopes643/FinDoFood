import React, { Component } from 'react';
import { View,
   StyleSheet, Image,Text, Dimensions, TextInput, ActivityIndicator,
    Button, Icon, Container, Header, Content, Alert } from 'react-native';
import FormRow from '../components/FormRow';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import * as Facebook from 'expo-facebook';

// import Map from '../pages/ScreenDoMapa';
 export default class FinFood2 extends Component {
   constructor(props) {
     super(props);
     this.state = {
         email : '',
         pass  :  '',
         loading: false,
     };
   }
   componentDidMount(){
    const firebaseConfig = {
        apiKey: "AIzaSyAwjI5Du4Jrbf8zXVKFjyH8w5L4oRJkp2o",
        authDomain: "finfood-4fef1.firebaseapp.com",
        databaseURL: "https://finfood-4fef1.firebaseio.com",
        projectId: "finfood-4fef1",
        storageBucket: "finfood-4fef1.appspot.com",
        messagingSenderId: "1056002227709",
        appId: "1:1056002227709:web:803a20f1bf6a6c5cb6ed94",
        measurementId: "G-FXSLK475Z4"
      };
      firebase.initializeApp(firebaseConfig);
   }

   onChangeHandler(key, value){
    this.setState({[key]: value})
  }


  async logInFb() {
    try {
      const {
        type,
        token,
        expires,
        permissions,
        declinedPermissions,
      } = await Facebook.logInWithReadPermissionsAsync('415838172682892', {
        permissions: ['public_profile'],
      });
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
        // Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
        this.props.navigation.replace('Map');
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }



  
  tryLogin(){
    this.setState({ loading: true, messagem: '' });
    const { email, pass } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, pass)
      .then(() => {
        this.props.navigation.replace('Map');

      })
      .catch(() => {
        this.setState({messagem: 'Nao Cadastrado'});

      })

      
  }


  renderButton(){
    if(this.state.loading)
      return <ActivityIndicator />;
    return(
        <Button 
          title='Login'
          onPress={() => this.tryLogin()}
          />
    );
  }
 
   render() {
     return (
    <View>
       <View style={styles.HeaderLogo}>
         <Image 
            style={{width:150, height:110}}
            source={require ('../../assets/LogoPronta.png')}
            />
       </View>
       <View style={styles.avatar}>
        <Image
            style={{width:100, height:100}} 
            source={require('../../assets/avatarGold.png')}/>
       </View>
       <View style={{alignItems:'center', marginTop:20}}>
        <FormRow>
            <TextInput 
              value={this.state.email}
              onChangeText={value => this.onChangeHandler('email', value)}
              placeholder = 'lopes643@gmail.com'
              keyboardType = 'email-address'
              style={styles.input}/> 
        </FormRow>
        </View>
        <View style={{alignItems:'center', marginTop:25, marginBottom:25}}>
        <FormRow >
            <TextInput 
              value={this.state.pass}
              onChangeText={value => this.onChangeHandler('pass', value)}
              placeholder='******' 
              style={styles.input} 
              secureTextEntry/> 
        </FormRow>
        </View>
        <FormRow style={{marginTop:25}}>
          { this.renderButton() }
        </FormRow>
        <FormRow>
        <View style={{marginTop:25}} />
          <Button iconLeft large danger title='Facebook' onPress={this.logInFb.bind(this)}>
          </Button>
        </FormRow>
        <FormRow>
        <View style={{marginTop:25}} />
          <Button iconLeft large danger title='Google'>
          </Button>
        </FormRow>
      </View>
     );
   }

   
}
    const widthWindow = Dimensions.get('window').width;
       const styles = StyleSheet.create({

        HeaderLogo:{
            // flex:1,
            width: widthWindow,
            height:110,
            alignItems:'center',
            marginTop:30,
            // backgroundColor:'#bab5b5'
        },
        avatar:{
            alignItems:'center',
            marginTop: 0,
        },
        input:{
            alignItems:'center',
            borderWidth:2,
            borderBottomColor:'black',
            borderRadius: 5,
            width: widthWindow-100,
            height: 45,
        },
        Botao:{
          marginTop: 20,
          alignItems:'center',
          backgroundColor:'#32a852'
        },
        botaoG:{
          height:65,
          width: 300,
          marginLeft:50,
          borderRadius:10,
          // marginTop:-300,
          elevation:10
      },
      botaoF:{
        height:65,
        width: 300,
        marginLeft:50,
        borderRadius:10,
        marginBottom:150,
        elevation:10
    },
    TextoB:{
      fontSize: 18,
      color: 'white'
  },

       })
 