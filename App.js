import React, {useState, useEffect} from "react";
import { Text, SafeAreaView, View, StyleSheet, StatusBar, YellowBox, Button, Alert} from "react-native";
import Footer from "./src/components/Footer";
import Form from './src/components/Form';
import ResultCalculation from "./src/components/ResultCalculation";
import colors from './src/utils/colors';

export default function App(){
  const [capital, setCapital] = useState(null);
  const [interes, setInteres] = useState(null);
  const [mes, setMes] = useState(null);
  const [total, setTotal] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // if (capital && interes && mes){ 
    //   calculate();
    // } else {
    //   reset();
    // }

    if (capital && interes && mes) calculate();
    else reset();

  }, [capital, interes, mes])
  

  const calculate = () => {
    reset();
    if (!capital){
      setErrorMessage("añade la cantidad que deseas solicitar");
    } else if (!interes) {
      setErrorMessage("añade el intereses del prestamo");
    } else if (!mes){
      setErrorMessage("añade los plazos del prestamo");
    } else {
      const i = interes / 100;
      const fee = capital / ((1 - Math.pow(i + 1, -mes)) / i);
      setTotal({
        pagoMensual: fee.toFixed(2).replace('.', ','),
        totalPago: (fee * mes).toFixed(2).replace('.', ','),
      });
      
    }
  };  

  const reset = () => {
    setErrorMessage("");
    setTotal(null)
  }

  return (
    <>
    <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.backround}/>
        <Text style={styles.text}>Cotizador de prestamos</Text>
        <Form 
          setInteres={setInteres} 
          setCapital={setCapital} 
          setMes={setMes} 
        />
      </SafeAreaView>
      
      <ResultCalculation 
        capital={capital}
        interes={interes}
        mes={mes}
        total={total}
        errorMessage={errorMessage}
        
      />
      <Footer calculate={calculate}/>
    </>
    
  );
}

const styles = StyleSheet.create({
  safeArea : {
    height: 290,
    alignItems: "center",
  },
  text : {
    fontSize: 25,
    color: "#DEBACE",
    fontWeight: "bold",
    marginTop: 40
  },
  backround: {
    backgroundColor: colors.COLOR_PRIMARIO,
    height: 200,
    width: '100%',
    borderBottomEndRadius: 30,
    borderBottomLeftRadius: 30,
    zIndex: -1,
    position: "absolute",
  }
})
