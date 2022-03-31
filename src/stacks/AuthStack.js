import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import {Home} from "../pages/Home/Home";
import {Result} from "../pages/Result/Result"

const AuthStack = createStackNavigator();

export const AuthStackComponent = () => {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen  name="Home" component={Home} option={{title:"Home!"}}/>
            <AuthStack.Screen name="Result" component={Result} option={{title: "Result!"}}/>
        </AuthStack.Navigator>
    )
}