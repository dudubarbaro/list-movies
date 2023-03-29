import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Filme = ({ filme, onRemove }) => {
  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <Image source={{ uri: filme.imagem }} style={styles.image} />
      </View>
      <View style={{ padding: 20, display: "flex" }}>
        <Text style={styles.text}>{filme.nome}</Text>
        <TouchableOpacity onPress={onRemove}>
          <View style={styles.delete}>
            <Text style={styles.text2}>{filme.genero}</Text>
            <MaterialCommunityIcons
              name="delete-circle"
              size={36}
              color="red"
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    backgroundColor: "#000",
    borderRadius: 10,
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "80%",
    height: 300,
    resizeMode: "stretch",
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    color: "white",
  },
  text2: {
    fontSize: 16,
    color: "white",
  },
  delete: {
    justifyContent: "space-between",
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Filme;
