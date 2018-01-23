import React, { Component } from 'react';
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'
import propTypes from 'prop-types';
import { Text, View } from 'react-native';
 
class Footer extends React.Component {
    render() {
        return (
            <BottomNavigation
            labelColor="white"
            rippleColor="white"
            style={{height: 56, position: 'absolute', bottom: 0, alignItems:"flex-end"}}
            onTabChange={(newTabIndex) => alert(`New Tab at position ${newTabIndex}`)}
            >
            <Tab
              barBackgroundColor='#37474F'
              label='Movies & TV'
              icon={<Icon size={24} color='white' name='tv' />}
            />
            <Tab
              barBackgroundColor='#00796B'
              label='Music'
              icon={<Icon size={24} color='white' name='music-note' />}
            />
            <Tab
              barBackgroundColor='#5D4037'
              label='Books'
              icon={<Icon size={24} color='white' name='book' />}
            />
            <Tab
              barBackgroundColor='#3E2723'
              label='Newsstand'
              icon={<Icon size={24} color='white' name='access-alarm' />}
            />
          </BottomNavigation>
        );
    }
}
 
const styles = {
  viewStyle: {
    height: 56, 
    elevation: 8, 
    position: 'absolute', 
    left: 0, 
    bottom: 0, 
    right: 0
  },
  textStyle: {
    fontSize: 20
  }
};

export default Footer;