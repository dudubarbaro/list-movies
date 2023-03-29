import React, { useState } from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import Filme from "./src/components/Filme";

const filmes = [
  {
    nome: "O Poderoso Chefão",
    genero: "Drama",
    imagem: "https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg",
  },
  {
    nome: "De Volta Para o Futuro",
    genero: "Aventura",
    imagem:
      "https://upload.wikimedia.org/wikipedia/en/d/d2/Back_to_the_Future.jpg",
  },
  {
    nome: "Forrest Gump",
    genero: "Drama",
    imagem:
      "https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg",
  },
  {
    nome: "Matrix",
    genero: "Ação",
    imagem:
      "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg",
  },
  {
    nome: "A Era do Gelo",
    genero: "Animação",
    imagem:
      "https://upload.wikimedia.org/wikipedia/en/3/3c/Ice_Age_%282002_film%29_poster.jpg",
  },
  {
    nome: "O Senhor dos Anéis",
    genero: "Fantasia",
    imagem:
      "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/92/34/89/20194741.jpg",
  },
  {
    nome: "Os smurfs",
    genero: "Animação",
    imagem:
      "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/87/32/77/19874357.jpg",
  },
];

const ListaFilmes = () => {
  const [filmesList, setFilmesList] = useState(filmes);

  const handleRemove = (index) => {
    const newFilmesList = [...filmesList];
    newFilmesList.splice(index, 1);
    setFilmesList(newFilmesList);
  };

  return (
    <ScrollView style={styles.scroll}>
      {filmesList.map((filme, index) => (
        <Filme key={index} filme={filme} onRemove={() => handleRemove(index)} />
      ))}
    </ScrollView>
  );
};

export default function App() {
  return (
    <View style={styles.content}>
      <Text style={styles.title}>MyFilms</Text>
      <ListaFilmes />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "red",
    textAlign: "center",
    backgroundColor: "#000",
    height: 60,
    paddingTop: 10,
  },
  scroll: {
    padding: 20,
  },
  content: {
    flex: 1,
    backgroundColor: "#212121",
  },
});
