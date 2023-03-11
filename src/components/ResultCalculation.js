import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function ResultCalculation(props) {
  const {errorMessage, capital, interes, mes, total} = props;
  console.log(props);
  return (
    <View>
      {total && (
        <View style={styles.boxResult}>
          <Text style={styles.title}>Resumen</Text>          
          <DataResult 
            title={"Cantidad solicitada"} value={`$${capital}.00`}
          />
          <DataResult 
            title={"Interes:"} value={`${interes} %`}
          />
          <DataResult  
            title={"Plazos"} value={`${mes} meses`} 
          />  

          <DataResult  
            title={"Pago mensual:"} value={`$${total.pagoMensual}`} 
          />  

          <DataResult  
            title={"Pago total:"} value={`$${total.totalPago}`} 
          />  
          
        </View> 
      )}
      <View>
        <Text style={styles.error}>{errorMessage}</Text>
      </View>
    </View>
  );
}

function DataResult (props){
  const {title, value} = props;

  return (
    <View style={styles.value}>
      <Text>{title}</Text>
      <Text>{value}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  error: {
    textAlign: "center",
    color: "#6096B4",
    fontWeight: "bold",
    fontSize: 20,
    paddingTop: 30,
  },
  boxResult: {
    padding: 30,
  },

  title: {
    fontSize: 25,
    textAlign:'center',
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 20,
  },
  value: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  }
})

