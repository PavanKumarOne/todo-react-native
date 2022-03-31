
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import { AuthStackComponent } from "./AuthStack";

const RootStack = createStackNavigator();

export const RootApplication = () => {
    return (
        <RootStack.Navigator>
            <RootStack.Screen screenOptions={{headerShown:false}}/>
            <RootStack.Screen name="Auth" component={AuthStackComponent}/>
        </RootStack.Navigator>
    )
}   