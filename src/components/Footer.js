import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../utils/colors';

// import { Container } from './styles';

export default function Footer(props) {
  const { calculate } = props;

  return (
    <View style={styles.viewFooter}>
      <TouchableOpacity style={styles.buttom} onPress={calculate}>
        <Text style={styles.text}>Calcular</Text>
      </TouchableOpacity>      
    </View>
  );
}

const styles = StyleSheet.create({
  viewFooter: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: colors.COLOR_PRIMARIO,
    height: 100,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    color: "#fff"
  },
  buttom: {
    backgroundColor: colors.COLOR_PRIMARIO_2,
    padding: 16,
    borderRadius: 30,
    width: '75%',
    alignItems: "center",

  }
})
