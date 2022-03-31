import { useState } from "react";
import {Text, View } from "react-native";
import { Buttons } from "../../atoms/Buttons/Button";
import { useDispatch } from "react-redux"
import {InputField} from "../../atoms/Input/Input"
import {v4 as uuid} from "uuid";
import { addTodo } from "../../redux/action";


export const SearchBox = (props) => {

    const dispatch = useDispatch();

    const [text,setText] = useState("");

    const handleSubmit = () => {
        if(text===""){
            alert("Please enter the task");
            return ;
        }

        const payload = {
            status : false,
            title : text,
            id : uuid(),
            mark : false
        }
        dispatch(addTodo(payload));
    }

    return (
        <View>
            <InputField placeholder={props.placeholder} onChangeText={(text)=>setText(text)}/>
            <Buttons title={props.title} onPress={handleSubmit}/>
        </View>
    )
}