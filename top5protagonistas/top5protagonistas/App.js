import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList, Image } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Nunito_400Regular,
  Lato_400Regular,
} from '@expo-google-fonts/dev';

const Separador = () => <View style={styles.separador}/> 

export default function App() {
  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Lato_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>
          TOP 5 protagonistas (animes)
        </Text>
        <FlatList
          data={arrayConsole}
          renderItem={({ item }) => (
            <View >
              <Text>
                <Text style={styles.subTitulo}>Personagem: </Text> {item.personagem}
                {'\n'}
                <Text style={styles.subTitulo}>Anime: </Text> {item.anime}
                {'\n'}
                <Text style={styles.subTitulo}>Autor: </Text> {item.Autor}
                {'\n'}
              </Text>
              <View style={styles.tituloimg}><Image style={styles.img} source={item.capa} /></View>
              <Separador />
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 25,
    color: '#ff5a73',
    fontFamily: 'Lato_400Regular',
    marginTop: 10,
    marginBottom:20,
    textAlign:'center'
  },
  img: {
    borderBottomRightRadius: 40,
    borderTopLeftRadius:40,
    width: 300,
    height: 300,
    resizeMode: 'center',
    marginBottom:40
  },
  subTitulo: {
    marginTop:20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  tituloimg:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  separador:{
    marginVertical: 50,
    borderBottomWidth:2,
    borderBottomColor:'#000',
    borderStyle: 'dashed'
  }
});

const arrayConsole = [
  {
    personagem: 'Goku',
    anime: 'Dragonball',
    Autor: 'Akira Toriyama',
    capa: require('./assets/goku.png'),
  },
  {
    personagem: 'Kurosaki Ichigo',
    anime: 'Bleach',
    Autor: 'Tite Kubo',
    capa: require('./assets/ichigo.jpg'),
  },
  {
    personagem: 'Monkey D. Luffy',
    anime: 'One Piece',
    Autor: 'Eiichiro Oda',
    capa: require('./assets/luffy.jpg'),
  },
  {
    personagem: 'Naruto',
    anime: 'Naruto Shippuden',
    Autor: 'Masashi Kishimoto',
    capa: require('./assets/naruto.jpg'),
  },
  {
    personagem: 'Edward Elric',
    anime: 'Fullmetal Alchemist brotherhood',
    Autor: 'Hiromu Arakawa',
    capa: require('./assets/edward.gif'),
  },
];