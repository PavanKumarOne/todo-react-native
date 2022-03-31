import { useDispatch } from "react-redux"
import { Button, Text ,StyleSheet} from "react-native";
import {deleteTodo,toggleTodo} from "../../redux/action"

export const Card = ({data}) => {

    const dispatch = useDispatch();
    const strike={
        textDecorationLine:"line-through",
    }

    return (
    <Text style={styles.text}>
    <Text style={data.status?strike:""}>Title:{data.title}</Text>
   
    <Text>Status :{data.status?"True" : "False"}</Text>
    <Button title="Delete" onPress={()=>dispatch(deleteTodo(data.id))}/>
        <Button title={data.status?"Done" : "Pending"} onPress={()=>dispatch(toggleTodo(data.id))}/>
    </Text>
    )
} 

const styles=StyleSheet.create({
    text:{
        marginTop:6
    }
})