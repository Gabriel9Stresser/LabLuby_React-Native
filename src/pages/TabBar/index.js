import React from "react";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import Home from "../Home";
import Followers from "../Followers";
import Repositories from "../Repositories";
import Following from "../Following";

const Tab = createBottomTabNavigator();

export default function TabBar() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#000000',
        inactiveTintColor: '#A5A5A5',
        style: {
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          backgroundColor: "white",
          position: 'absolute',
          bottom: 0,
          padding: 3,
          width: '100%',
          height: 75,
          zIndex: 8,
        },
        tabStyle: {
          paddingBottom: 15,
        },
        labelStyle: {
          fontSize: 15,
          fontFamily: 'Helvetica-Neue'
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Repos"
        component={Repositories}
        options={{
          tabBarLabel: "Repos",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="github" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Followers"
        component={Followers}
        options={{
          tabBarLabel: "Seguidores",
          tabBarIcon: ({ color, size, activ }) => (
            <MaterialIcons name="people-outline" color={color} size={45} />
          ),
        }}
      />
      <Tab.Screen
        name="Following"
        component={Following}
        options={{
          tabBarLabel: "Seguindo",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="people-outline" color={color} size={45} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
