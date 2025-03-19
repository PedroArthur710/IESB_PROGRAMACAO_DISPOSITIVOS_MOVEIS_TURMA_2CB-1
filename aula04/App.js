// imports
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image, Alert, ScrollView } from 'react-native';

// função que define o componente
// retorna o que vai ser renderizado na tela (template feito com JSX)
export default function App() {
  // lógica do meu componente
  const nome = "Pedro do quero";

  // Definindo uma única função alerta
  function alerta() {
    Alert.alert('Clicou no botão');
  }

  // retorno com jsx
  return (
    <ScrollView style={styles.container}>
      <View style={styles.viewContainer}>
        <Text style={{fontSize: 40, fontStyle:'italic'}}>Projeto do bandido</Text>
        <Text style={styles.textGrande}>Bem-vindo, {nome}</Text>
        <Text>{2 + 2}</Text>
        <Button title='Clicar' onPress={alerta} />
        <StatusBar style="auto" />
        
        <Image 
          source={{ 
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVD_a3qauqeF54xdg4jldEyLo_C5W0jRMa3chUVZ21LHub-KvxFNJdu5RxYl2htFjTk87Pp0J75jV82ddvgwCnArYLKGRGJwuHdVKEVw" 
          }}
          style={{
            height: 400,
            width: 400
          }}
        />

        <Image 
          source={require('./imagens/aa.jpg')} // Substituindo "criss" por "aa"
          style={{
            height: 200,
            width: 200
          }}
        />

        <Image 
          source={require('./imagens/aa.jpg')} // Substituindo "criss" por "aa"
          style={{
            height: 200,
            width: 200
          }}
        />

        <Image 
          source={require('./imagens/aa.jpg')} // Substituindo "criss" por "aa"
          style={{
            height: 200,
            width: 200
          }}
        />

        <Image 
          source={require('./imagens/aa.jpg')} // Substituindo "criss" por "aa"
          style={{
            height: 200,
            width: 200
          }}
        />
      </View>
    </ScrollView>
  );
}

// estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
  },
  viewContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  textGrande:{
    fontSize: 40,
    fontWeight: 900
  }
});
