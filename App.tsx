import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Provider, useSelector } from 'react-redux';
import { store, getCategory, getFields } from './src/redux/store';

//screens
import Dashboard from './src/screens/dashboard/Dashboard';
import ManageCategory from './src/screens/manage/ManageCategory';
//import Categories from './src/screens/categories/Categories';

const Drawer = createDrawerNavigator();

const App = () => {
  //const category = useSelector(getCategory);
  //const fields = useSelector(getFields);
  
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

            {/* <Drawer.Screen 
              name="Categories" 
              component={Categories}
              options={{ title: category}} 
            /> */}
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