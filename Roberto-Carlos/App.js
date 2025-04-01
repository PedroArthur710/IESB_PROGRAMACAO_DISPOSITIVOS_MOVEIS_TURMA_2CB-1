// imports
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image, Alert, ScrollView } from 'react-native';

// função que define o componente
export default function App() {
  // lógica do meu componente
  const nomeJogador = "Roberto Carlos";
  const time = "Framengo";
  const jogador = "Roberto Carlos";
  const informacoes = [
    "Posição: Zagueiro",
    "Idade: 51 anos",
    "País: Brasil",
    "Gols: 127",
    "Assistências: 116"
  ];

  // Função de alerta
  function alerta() {
    Alert.alert("Gol do Roberto Carlos/fRAMEEEENGO!");
  }

  // retorno com JSX
  return (
    <ScrollView style={styles.container}>
      <View style={styles.viewContainer}>
        <Text style={styles.titulo}>Projeto Futebol</Text>

        {/* Nome do Jogador */}
        <Text style={styles.textGrande}>Nome: {nomeJogador}</Text>
        <Text style={styles.textGrande}>Time: {time}</Text>
        <Text style={styles.textGrande}>Jogador: {jogador}</Text>

        {/* Informações do Jogador */}
        {informacoes.map((info, index) => (
          <Text key={index} style={styles.textInfo}>{info}</Text>
        ))}

        {/* Botão para disparar alerta */}
        <Button title="GOL" onPress={alerta} />

        <StatusBar style="auto" />
        
        {/* Imagens */}
        <Image 
          source={require('./imagem/robertinho.webp')}  
          style={styles.imagem}
        />
        <Image 
          source={require('./imagem/img1.jpg')}  
          style={styles.imagem}
        />
        <Image 
          source={require('./imagem/img2.webp')}  
          style={styles.imagem}
        />
        <Image 
          source={require('./imagem/img3.jpg')}  
          style={styles.imagem}
        />
        <Image 
          source={require('./imagem/img5.jpg')}  
          style={styles.imagem}
        />
      </View>
    </ScrollView>
  );
}

// estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5', 
  },
  viewContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  textGrande: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  textInfo: {
    fontSize: 18,

    
    color: '#666',
    marginBottom: 5,
  },
  imagem: {
    height: 200,
    width: 200,
    marginVertical: 10,
    borderRadius: 10, 
  }
});
