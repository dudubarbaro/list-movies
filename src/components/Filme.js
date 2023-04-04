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
    marginBottom: 35,
    backgroundColor: "#f5f5f5",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    width: "90%",
    borderRadius: 30,
    alignSelf: "center",
    
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
  },
  image: {
    width: "70%",
    height: 300,
    resizeMode: "stretch",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    color: "black",
  },
  text2: {
    fontSize: 16,
    color: "black",
  },
  delete: {
    justifyContent: "space-between",
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Filme;
