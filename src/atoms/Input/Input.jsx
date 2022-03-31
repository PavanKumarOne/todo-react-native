import { TextInput,StyleSheet } from "react-native"

export const InputField = ({placeholder,onChangeText}) => {
    return <TextInput style={styles.container} placeholder={placeholder} onChangeText={onChangeText}/>
}

const styles = StyleSheet.create({
    container : {
        borderWidth: 1,
        borderColor: '#777',
        padding:8,
        width:200
    }
})