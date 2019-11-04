import React, { Component } from 'react';
import { View,
   StyleSheet, Image,Text, Dimensions, 
   TextInput, ActivityIndicator, TouchableOpacity, Alert } from 'react-native';
import FormRow from '../components/FormRow';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import * as Facebook from 'expo-facebook';


export default class FinFood extends Component {
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
   

    

  /*criando botao de login*/
  RenderButtonLogin(){
    if(this.state.loading)
        return <ActivityIndicator />;
            return(
                <TouchableOpacity 
                    onPress={() => this.tryLogin()}
                    style={styles.button}>
                    <Text style={styles.TextBotao}> Login </Text>
                </TouchableOpacity>
               
            )
  }

    render() {
        return (
            <View style={styles.Container}>
                <View style={{ backgroundColor: '#E0E0E0', height: 100 }}>
                </View>

                    <View style={styles.avatar}>
                        <Image
                            style={{ width: 100, height: 100 }}
                            source={require('../../assets/avatar.png')}
                            />

                    </View>
                    <View style={{alignItems:'center'}}>
                    <FormRow>
                        {/* Input Login */}
                        <TextInput
                            value={this.state.email}
                            onChangeText={value => this.onChangeHandler('email', value)}
                            keyboardType='email-address'
                            placeholderTextColor='#0307fc'
                            placeholder="Email"
                            style={styles.Input}

                        />
                    </FormRow>
                    </View>
                    <View style={{alignItems:'center'}}>
                    <FormRow>
                        {/* Input Senha */}
                        <TextInput
                            placeholderTextColor='#0307fc'
                            value={this.state.pass}
                            onChangeText={value => this.onChangeHandler('pass', value)}
                            placeholder='******'
                            secureTextEntry
                            style={styles.Input}
                        />
                    </FormRow>
                    </View>
                    <Text
                        style={styles.forgot}
                        accessibilityRole='link'
                    >
                        ESQUECI A SENHA

                        </Text>

                   { this.RenderButtonLogin() }

                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.logInFb}
                    /*crinado botao do facebook */
                    >
                        <Image
                            style={styles.Image}
                            // source={require('../../../assets/facebook.png')}
                            source={require('../../assets/facebook.png')}


                        />
                        <Text style={{ color: 'blue', fontSize: 20, marginTop: 5, fontWeight: '500' }}> Entrar com Facebook </Text>

                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.onPressButton}


                    /*crinado botao do google */
                    >
                        <Image
                            style={styles.Image}
                            // source={require('../../../assets/google.png')}
                            source={require('../../assets/google.png')}

                        />
                        <Text style={{ color: 'red', fontSize: 20, marginTop: 5, fontWeight: '500' }}> Entrar com Email </Text>
                    </TouchableOpacity>

                    <Text
                        style={{ alignSelf: 'center', margin: 10, fontWeight: '800' }}
                        accessibilityRole='link'
                    >
                        CADASTRE-SE

                        </Text>
                

            </View >
        );
    }
}
const widthWindow = Dimensions.get('window').width;
const styles = StyleSheet.create({

    Container: {
        flex: 1,
        backgroundColor: 'white',
    },
    Input:{
        alignItems:'center',
        // borderWidth:0.5,
        elevation:4,
        margin:10,
        // borderBottomColor:'black',
        borderRadius: 5,
        width: widthWindow-100,
        height: 45,
        color:'red'
    },
    avatar: {
        alignItems: 'center',
        marginTop: -50,
    },
    forgot: {
        alignSelf: 'flex-end',
        margin: 10,
        fontSize: 14,
        fontWeight: '800'

    },
    button: {
        width: 250,
        backgroundColor: 'white',
        padding: 10,
        margin: 10,
        justifyContent: 'space-evenly',
        borderRadius: 8,
        elevation: 4,
        alignItems: 'stretch',
        alignSelf: 'center',
        flexDirection: 'row',
    },
    TextBotao: {
        color: 'white',
        fontSize: 20,
        textShadowColor: '#919191',
        textShadowOffset: { width: 0.8, height: 0.8 },
        textShadowRadius: 6,
    },
    Image: {
        width: 40,
        height: 40,
        position: 'relative',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',

    },


})