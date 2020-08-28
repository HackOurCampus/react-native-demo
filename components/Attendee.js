import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Attendee({ name, college, year, hometown, favPL }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 0.47,
          borderRightColor: "gray",
          borderRightWidth: StyleSheet.hairlineWidth,
          marginRight: 5,
        }}
      >
        <Text style={styles.infoText}>Name: {name}</Text>
        <Text style={styles.infoText}>College: {college}</Text>
        <Text style={styles.infoText}>Class of {year}</Text>
      </View>
      <View style={{ flex: 0.53 }}>
        <Text style={styles.infoText}>Hometown: {hometown}</Text>
        <Text style={styles.infoText}>Favorite PL: {favPL}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#6666cc",
    borderRadius: 8,
    marginTop: 10,
    flexDirection: "row",
  },

  infoText: {
    fontSize: 16,
    padding: 5,
  },
});
