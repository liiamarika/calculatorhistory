import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import { useState } from 'react';

export default function App() {

const [result, setResult] = useState(0);
const [num1, setNum1] = useState('');
const [num2, setNum2] = useState('');
const [text, setText] = useState('');
const [data, setData] = useState([]);

// pitää käyttää välimuuttujaa koska setresult on asynkroninen ja result ei ole vielä ehtinyt muuttua kun sitä jo tarvitaan dataa tallennettaessa

const checkPlusResult = () => {
    const plus = parseFloat(num1) + parseFloat(num2);
    setResult(plus)
    setText(num1 + ' + ' + num2 + ' = ' + plus)
    setData([...data, {key:text }]);
    setNum1('');
    setNum2('');
}

const checkMinusResult = () => {
    const minus = (num1 - num2);
    setResult(minus)
    setText(num1 + ' - ' + num2 + ' = ' + minus)
    setData([...data, {key:text }]);
    setNum1('');
    setNum2('');
}


  return (
    <View style={styles.container}>
     <View style={styles.inputContainer}> 
       <Text>Result: {result}</Text>
       <TextInput style={{width:200, borderColor:'gray', borderWidth:1}}
        keyboardType='numeric'
        value={num1}
        onChangeText={num1 => setNum1(num1)} 
       />
       <TextInput style={{width:200, borderColor:'gray', borderWidth:1}}
        keyboardType='numeric'
        value={num2}
        onChangeText={num2 => setNum2(num2)} 
       />
     </View>
     <View style={styles.buttonContainer}>
        <Button onPress={checkPlusResult} 
          title="+"/>
       <Button onPress={checkMinusResult} 
          title="-"/>
     </View>
     <View style={styles.inputContainer}>
        <Text>History:</Text>
        <FlatList
          data={data}
          renderItem={({item}) =>
          <Text>{item.key}</Text> } 
        />
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    flex: 2,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  buttonContainer: {
    flex: 1,
    width: 100,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
});
