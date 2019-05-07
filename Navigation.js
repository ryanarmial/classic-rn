import {
  createStackNavigator,
  createMaterialTopTabNavigator,
  createBottomTabNavigator,
  createAppContainer
} from "react-navigation";

import Home from './views/Home'
import About from './views/About'
import Profile from './views/Profile'

const StackNav = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerTitle: "KEREN TUH"
    }
  },
  About: { screen: About },
  Profile: { screen: Profile }
}, {
  initialRouteName: 'Home',
  tabBarOptions: {
    activeTintColor: 'yellow',
    labelStyle: {
      fontSize: 12,
    },
    style: {
      backgroundColor: 'green',
      color: "black"
    },
  }

})

export default createAppContainer(StackNav)
