// app/index.tsx
import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  StyleSheet, Alert, KeyboardAvoidingView, Platform,
} from 'react-native';
import { useRouter } from 'expo-router';

// Credenciais fixas (sem back-end por enquanto)
const USUARIO_VALIDO = 'admin';
const SENHA_VALIDA   = '123';


export default function Index() {
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