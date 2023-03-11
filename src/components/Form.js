import React  from "react";
import {StyleSheet, TextInput, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import colors from '../utils/colors';

export default function Form (props){
  const {setInteres, setCapital, setMes} = props;
  return(
    <View style={styles.viewForm}>
      <View style={styles.viewInputs}>
      <TextInput 
        placeholder="cantidad a pedir"  
        keyboardType="numeric"
        style={styles.input}
        onChange={(e) => setCapital(e.nativeEvent.text)}
      />
      <TextInput 
        placeholder="interes %"  
        keyboardType="numeric"
        style={[styles.input, styles.inputIn]}
        onChange={(e) => setInteres(e.nativeEvent.text)}
      />
      </View>
      <RNPickerSelect
            onValueChange={(value) => setMes(value)}
            useNativeAndroidPickerStyle={false}
            placeholder={{ label: "Selecciona el plazo", value: null }}
            style={[pickerSelectStyles]}
            items={[
                { label: '3 meses', value: 3 },
                { label: '6 meses', value: 6 },
                { label: '12 meses', value: 12 },
                { label: '24 meses', value: 24 },
            ]}
        />
        

    </View>
  )
}

const styles = StyleSheet.create({
  viewForm : {
    position: "absolute",
    bottom: 0,
    paddingHorizontal: 50,
    backgroundColor: colors.COLOR_PRIMARIO_2,
    borderRadius: 30,
    height: 180,
    width: '85%',
    justifyContent: "center"
  },
  viewInputs: {
    flexDirection: "row",
  },
  input: {
    height: 50,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: colors.COLOR_PRIMARIO,
    borderRadius: 5,
    width: '60%',
    marginRight: 5,
    marginLeft: -5,
    marginBottom: 10,
    color: '#000',
    paddingHorizontal: 20
  },
  inputIn:{
    width: '40%',
    marginLeft: 5,
  }
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 2,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
    backgroundColor: '#fff',
    marginLeft: -5,
    marginRight: -5,
  },
  inputAndroid: {
    fontSize: 16,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'grey',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
  }
})