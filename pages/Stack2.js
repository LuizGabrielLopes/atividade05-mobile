import React from "react";
import { View, Text } from "react-native";

export default function Stack2() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Página 2</Text>
    </View>
  );
}

const styles = {
  conatiner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
};
