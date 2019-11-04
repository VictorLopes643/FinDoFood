import FinFood from './src/pages/FinFood';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import ScreenDoMapa from './src/pages/ScreenDoMapa';
import FinFood2 from './src/pages/FinFood2'



const AppNavigator = createStackNavigator({
  'FinFood' :{
    screen: FinFood,
    navigationOptions:{
      headerTransparent: 'false'
    }
  }, 
  // 'Home': {
  //   screen: FinFood2,
  //   navigationOptions:{
  //     headerTransparent: 'false'
  //   }
    // },
  'Map' :{
    screen: ScreenDoMapa,
    navigationOptions:{
      headerTransparent: 'false'
    }
  },
  'Email' : {
    screen: FinFood,
    navigationOptions:{
      headerTransparent: 'false'
  }
}

})

const AppContainer =  createAppContainer(AppNavigator);

export default AppContainer;