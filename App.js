import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image } from 'react-native';

export default function App() {

  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('');

  const urlImage = "https://superfarma.com.br/wp-content/uploads/2022/12/Supera-Farma-Tabela-IMC-Classificacao.png";

  function calcular() {
    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura);

    if (isNaN(pesoNum) || isNaN(alturaNum)) {
      alert("Insira um valor válido nos campos.");
      return;
    }

    const valorCalculado = pesoNum / Math.pow(alturaNum, 2);
    setResultado(valorCalculado.toFixed(1));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calcule o seu IMC</Text>

      <TextInput
        style={styles.input}
        placeholder='Digite o seu peso (kg)'
        onChangeText={(valor) => setPeso(valor)}
        keyboardType='numeric'
      />

      <TextInput
        style={styles.input}
        placeholder='Digite a sua altura (m)'
        onChangeText={(valor) => setAltura(valor)}
        keyboardType='numeric'
      />

      <Button title='Calcular' onPress={calcular} />

      <Text style={styles.resultado}>{resultado && `Seu IMC é: ${resultado}`}</Text>

      <Image
        source={{ uri: urlImage }}
        style={styles.imagem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  imagem: {
    marginTop: 30,
    alignSelf: 'center',
    width: 300,
    height: 350,
    resizeMode: 'contain'
  },

  resultado: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20
  },

  container: {
    backgroundColor: '#ddf',
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },

  titulo: {
    marginVertical: 30,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10,
    backgroundColor: 'white'
  },
});
