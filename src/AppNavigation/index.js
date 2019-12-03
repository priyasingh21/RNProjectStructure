import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {
   Home
} from '../Screens/Containers';

const MainNavigator = createStackNavigator({
    Home: { screen: Home },
},{
    initialRouteName: 'Home',
    headerMode: 'none'
});

const AppContainer = createAppContainer(MainNavigator);

export default AppContainer;
