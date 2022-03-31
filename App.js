
import { StyleSheet} from 'react-native';
import {Provider} from "react-redux";
import {store} from "./src/redux/store"
import 'react-native-gesture-handler';
import { Home } from './src/pages/Home/Home';


export default function App() {  

  return (
      <Provider store={store}>
        <Home />
      </Provider>
  );  
}



