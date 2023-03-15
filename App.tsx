import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

//screens
import Dashboard from './src/screens/dashboard/Dashboard';
import ManageCategory from './src/screens/manage/ManageCategory';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <>
      <StatusBar style="dark" />
      <Provider store={store}>
        <NavigationContainer>
          <Drawer.Navigator 
            initialRouteName="Dashboard" 
            screenOptions={{ headerTitleAlign: 'center'}}
          >
            <Drawer.Screen 
              name="Dashboard" 
              component={Dashboard} 
            />
            <Drawer.Screen 
              name="ManageCategory" 
              component={ManageCategory}
              options={{ title: 'Manage Categories'}} 
            />
          </Drawer.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {},
});