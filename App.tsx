noimport { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { useRouter } from 'expo-router';

export default function App() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const router = useRouter();

  const USUARIO_VALIDO = 'admin';
  const SENHA_VALIDA = '123';

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

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.card}>

        {/* Ícone e Títulos */}
        <View style={styles.iconContainer}>
          <Text style={styles.icon}>🔐</Text>
        </View>
        <Text style={styles.titulo}>Bem-vindo!</Text>
        <Text style={styles.subtitulo}>Faça login para continuar</Text>

        {/* Campo de Usuário */}
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Usuário</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu usuário"
            placeholderTextColor="#aaa"
            value={usuario}
            onChangeText={setUsuario}
            autoCapitalize="none"
          />
        </View>

        {/* Campo de Senha com Olho Mágico */}
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Senha</Text>
          <View style={styles.senhaContainer}>
            <TextInput
              style={styles.inputSenha}
              placeholder="Digite sua senha"
              placeholderTextColor="#aaa"
              value={senha}
              onChangeText={setSenha}
              secureTextEntry={!senhaVisivel}
            />
            <TouchableOpacity
              onPress={() => setSenhaVisivel((prev) => !prev)}
              style={styles.olhoBtn}
            >
              <Text style={styles.olhoIcon}>
                {senhaVisivel ? '🙈' : '👁️'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Botão de Login */}
        <TouchableOpacity style={styles.botao} onPress={handleLogin}>
          <Text style={styles.botaoTexto}>Entrar</Text>
        </TouchableOpacity>

      </View>
      <StatusBar style="auto" />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e', // Fundo escuro azul-marinho
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  card: {
    width: '100%',
    backgroundColor: '#16213e',
    borderRadius: 24,
    padding: 32,
    elevation: 10,           // Sombra no Android
    shadowColor: '#000',     // Sombra no iOS
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 16,
  },
  input: {
    backgroundColor: '#0f3460',
    color: '#e2e8f0',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#1e4d8c',
  },
  senhaContainer: {
    flexDirection: 'row', // Input e ícone lado a lado
    alignItems: 'center',
    backgroundColor: '#0f3460',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#1e4d8c',
  },
  inputSenha: {
    flex: 1,              // Ocupa o espaço restante
    color: '#e2e8f0',
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
  },
  botao: {
    backgroundColor: '#e94560',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 12,
    shadowColor: '#e94560', // Sombra colorida no botão
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 6,
  },
  // Extras para o layout do login
  iconContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  icon: {
    fontSize: 48,
    color: '#e94560',
  },
  titulo: {
    fontSize: 24,
    color: '#e2e8f0',
    textAlign: 'center',
    marginBottom: 4,
    fontWeight: 'bold',
  },
  subtitulo: {
    fontSize: 16,
    color: '#bfc9da',
    textAlign: 'center',
    marginBottom: 28,
  },
  inputWrapper: {
    marginBottom: 16,
  },
  label: {
    color: '#c0c7d2',
    marginBottom: 6,
    marginLeft: 4,
    fontSize: 15,
    fontWeight: '500',
  },
  olhoBtn: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  olhoIcon: {
    fontSize: 20,
    color: '#e2e8f0',
  },
  botaoTexto: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
