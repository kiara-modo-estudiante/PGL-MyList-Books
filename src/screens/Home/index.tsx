import BookList from "@/components/BookList";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Home = () => {
  return (
    <View style={styles.container}>
      <BookList />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
});
