import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import ScreenDoMapa from './pages/ScreenDoMapa';
import FinFood from './pages/FinFood';


const AppNavigator = createStackNavigator({
    
    'Home': {
      screen: FinFood,
      navigationOptions:{
        headerTransparent: 'false'
      },
    'Map' :{
      screen: ScreenDoMapa,
      navigationOptions:{
        headerTransparent: 'false'
      }
    },
    },
  })
  
  const AppContainer =  createAppContainer(AppNavigator);
  
  export default AppContainer;