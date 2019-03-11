import { Router, Scene, Drawer, Stack, Actions } from 'react-native-router-flux';
import React from 'react';
import Test from './components/Add/Test';
import Header from './components/Header/HeaderContainer';
import AddScreen from './components/Add/AddScreen';
import DrawerContent from './components/Add/DrawerContent';
import HomeScreen from './components/Home/HomeScreen';
import { MaterialIcons } from '@expo/vector-icons';


{/* <MaterialIcons name='menu' size={props.iconSize} /> */}

const NavBar = () => {
  return (
    <Header onMenuPress={Actions.drawerOpen} 
      headerText="To Do List" 
      backgroundColor='red' 
      menuIconColor='blue'
      textStyle={{ color: 'white' }}
      searchIconColor="yellow"
      dotsIconColor="green"  
      borderColor="pink"
    />
  )
}


const Routes = () => {
    return ( 
        <Router>
            <Drawer
              navBar={NavBar} 
              key="drawerMenu"
              contentComponent={DrawerContent}
              drawerIcon={<MaterialIcons name='menu' size={32}/>}
              drawerWidth={250}
              drawerPosition="left"
            >
              <Scene key="home" component={HomeScreen} />
              <Scene key="test" component={Test}/> 
              <Scene key="add" component={AddScreen} />
            </Drawer>
        </Router>
    )
};

export default Routes;
