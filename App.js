
import { StyleSheet} from 'react-native';
import {Provider} from "react-redux";
import {store} from "./src/redux/store"
import 'react-native-gesture-handler';
import { Home } from './src/pages/Home/Home';
import { NavigationContainer } from '@react-navigation/native';
import { RootApplication } from './src/stacks/MyRoutes';


export default function App() {  

  return (
      <Provider store={store}>
        <NavigationContainer>
          <RootApplication/>
        </NavigationContainer>
      </Provider>
  );  
}



