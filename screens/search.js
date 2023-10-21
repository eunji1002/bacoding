import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SearchBar } from "react-native-elements";

const Search = () => {
  const [search, setSearch] = useState('');

  const updateSearch = (text) => {
    setSearch(text);
  };

  return (
    <View style={Styles.container}>
      <Text style={Styles.HomeText}>상품검색 페이지입니다.</Text>
      <SearchBar
        placeholder="검색어를 입력하세요..."
        onChangeText={updateSearch}
        value={search}
        platform="default" // 또는 "ios" 또는 "android"
        containerStyle={Styles.searchBarContainer}
        inputContainerStyle={Styles.inputContainer}
        inputStyle={Styles.inputText}
        clearIcon={false} // 지우기 아이콘 표시 여부
      />
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  HomeText: {
    fontSize: 30,
    textAlign: "center",
  },
  searchBarContainer: {
    backgroundColor: 'transparent', // 검색 바의 배경색
    borderTopWidth: 0, // 상단 테두리 제거
    borderBottomWidth: 0, // 하단 테두리 제거
  },
  inputContainer: {
    backgroundColor: '#EFEFEF', // 입력란의 배경색
    borderRadius: 20, // 입력란의 모서리 둥글게
  },
  inputText: {
    fontSize: 16, // 텍스트 크기
  },
});

export default Search;
