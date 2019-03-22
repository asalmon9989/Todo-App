import { Router, Scene, Drawer, Stack, Actions } from 'react-native-router-flux';
import React from 'react';
import Test from './components/Add/Test';
import Header from './components/Header/HeaderContainer';
import AddScreen from './components/Add/AddScreen';
import DrawerContent from './components/Add/DrawerContent';
import HomeScreen from './components/Home/HomeScreen';
import HomeNavBar from './components/common/HomeNavBar';
import { MaterialIcons } from '@expo/vector-icons';

{/* <MaterialIcons name='menu' size={props.iconSize} /> */}
/**
 * @todo wire header to redux
 */

const Routes = () => {
  return ( 
    <Router>
      <Drawer
        navBar={HomeNavBar} 
        key="drawerMenu"
        contentComponent={DrawerContent}
        drawerIcon={<MaterialIcons name='menu' size={32}/>}
        drawerWidth={250}
        drawerPosition="left"
      >
        <Scene key="App">
          <Scene key="HomeScreen" component={HomeScreen} />
          <Scene key="test" component={Test}/> 
          <Scene key="AddScreen" component={AddScreen} initial/>
        </Scene>
      </Drawer>
    </Router>
  )
};

export default Routes;
