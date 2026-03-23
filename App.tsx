import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
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
});


export default function LoginScreen() {
  const [usuario, setUsuario]           = useState('');
  const [senha, setSenha]               = useState('');
  const [senhaVisivel, setSenhaVisivel] = useState(false);

  const router = useRouter();



  const handleLogin = () => {
    if (usuario === USUARIO_VALIDO && senha === SENHA_VALIDA) {
      router.push({
        pathname: '/home',
        params: { nome: usuario },
      });
    } else {
      Alert.alert('Erro', 'Usuário ou senha incorretos!');
    }
  };