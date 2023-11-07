import React from "react";
import { FlatList } from "react-native";
import Header from "./components/header";
import MainContent from "./components/mainContent";

export default function Blog() {
  const data = [{ key: "header" }, { key: "MainContent" }];
  return (
    <FlatList
      data={data}
      style={{ padding: 20 }}
      keyExtractor={(item) => item.key}
      renderItem={({ item }) => {
        switch (item.key) {
          case "header":
            return <Header />;
          case "MainContent":
            return <MainContent />;
          default:
            break;
        }
        return null;
      }}
    />
  );
}
