import { createStackNavigator } from 'react-navigation';
import NavSecond from './NavSecond';

const AppNavigator = createStackNavigator({
  NavSecond: { screen: NavSecond },
});

export default AppNavigator;