import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { Container, Button, Icon, Content } from 'native-base';
import { DownloadResumable } from 'expo-file-system';
import FormRow from '../components/FormRow';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';


export default class FinFood extends Component {

    constructor(props){
        super(props);
        
        this.state = {

        }
    }

  render() {
    return (

      <Container>
      <View style={styles.logo}>
          <Image 
            source={require ('../../assets/LogoPronta.png')}/>
      </View>
      <View style={styles.avatar}>
          <Image
          style={{width:100, height:100}} 
          source={require('../../assets/avatarGold.png')}/>
      </View>
        <Container style={styles.Ctexto}>
          <Text style={styles.Texto}>Não possui uma conta???</Text>
          <Text style={styles.Texto}>Cadastre-se</Text>
        </Container>
        <View >
        <View >
            <FormRow>
                <Button iconLeft large danger style={styles.botaoG} >
                    
                    <Icon name='pizza' />
                    <Text style={styles.TextoB}>Sing in with Google</Text>
                </Button>
            </FormRow>
        </View>
            <FormRow>
                <Button iconLeft style={styles.botaoF} >
                    <Icon name='pizza' />
                    <Text style={styles.TextoB}>Log in with Facebook</Text>
                </Button>
            </FormRow>
        </View>
      </Container>
    );
  }
}
    
const styles = StyleSheet.create({
    logo: {
        flex:1,
        alignItems: 'center',
        marginTop:80
        // marginTop: 50,
        // marginLeft: 80,
    },
    avatar:{
        flex:1,
        alignItems: 'center',
        marginTop:-200,
    },
    Ctexto:{
        flex:1,
        alignItems: 'center',
        marginTop: -250
    },

    Texto:{
        fontSize: 18,
        color: 'black'
    },
    TextoB:{
        fontSize: 18,
        color: 'white'
    },
    botaoG:{
        height:65,
        width: 300,
        marginLeft:50,
        borderRadius:10,
        marginTop:-300,
        elevation:10
    },
    Cface:{
        flex:1,
        alignSelf:"flex-start",
    },
    botaoF:{
        height:65,
        width: 300,
        marginLeft:50,
        borderRadius:10,
        marginTop:-200,
        elevation:10
    },
    Cgoogle:{
        flex:1,
        alignSelf:"flex-start",
    }
})

