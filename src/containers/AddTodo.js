import React, {useState, useCallback} from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View,} from 'react-native';
import {connect, useDispatch} from 'react-redux';
import { addTodo2 } from '../actions'
const AddTodo = ()=>   {
    // hooks implemented. 
    const [value, setValue] = useState(undefined);
    const dispatch = useDispatch();

    const addTodo  = useCallback(() => {
        if (value.length > 0) {
        dispatch(addTodo2(value));
        setValue('')
        }
    })


        return (
            <View style={{flexDirection: 'row', marginHorizontal: 20, marginTop: 10,}}>
                <TextInput
                    value={value}
                    onChangeText={value => setValue(value)}
                    placeholder="Enter your to do here. "
                    style={{
                        borderWidth: 1,
                        borderColor: '#f2f2e1',
                        backgroundColor: "#eaeaea",
                        height: 50,
                        flex: 1,
                        padding: 5
                    }}/>
                <TouchableOpacity onPress={() => addTodo()}>
                    <View style={{height: 50, backgroundColor: "#eaeaea", marginLeft:10}}>
                        <Text style={{fontSize: 20, margin: 10}}> Add </Text>
                    </View>
                </TouchableOpacity>
            </View>
        );

}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center', flex: 1, justifyContent: 'center'
    }

});

export default connect()(AddTodo)
