import React from "react";
import { View, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import { DefaultTheme } from "react-native-paper";

export default function CardFilmes() {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Title title="FIlme 1" />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: DefaultTheme.colors.background,
    alignItems: "center",
    paddingTop: 10,
  },
  card: {
    width: "90%",
  },
});