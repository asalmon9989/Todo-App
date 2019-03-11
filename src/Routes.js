import { Router, Scene, Drawer, Stack } from 'react-native-router-flux';
import React from 'react';
import Test from './components/Add/Test';
import AddScreen from './components/Add/AddScreen';
import DrawerContent from './components/Add/DrawerContent';
import HomeScreen from './components/Home/HomeScreen';
import { MaterialIcons } from '@expo/vector-icons';


{/* <MaterialIcons name='menu' size={props.iconSize} /> */}


const Routes = () => {
    return ( 
        <Router>
            <Drawer
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
