import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Search = () => {

  return (
    <View style={Styles.container}>      
      <Text style={Styles.HomeText}>상품검색 페이지 입니다.</Text>
    </View>
  )
}

export default Search;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  HomeText: {
    fontSize: 30,
    textAlign: "center",
  },
})