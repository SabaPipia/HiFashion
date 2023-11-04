import React from "react";
import { FlatList } from "react-native";
import NewArrival from "./components/newArrival";
import Collections from "./components/Collections";
import CustomCarousel from "./components/ForYou";
import Trending from "./components/Trending";
import About from "./components/About";
import Hero from "./components/Hero";
import FollowUs from "./components/followUs";

export default function HomeScreen() {
  const data = [
    { key: "hero" },
    { key: "newArrival" },
    { key: "Collections" },
    { key: "ForYou" },
    { key: "Trending" },
    { key: "About" },
    { key: "FollowUs" },
  ];

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.key}
      renderItem={({ item }) => {
        switch (item.key) {
          case "hero":
            return <Hero />;
          case "newArrival":
            return <NewArrival />;
          case "Collections":
            return <Collections />;
          case "ForYou":
            return <CustomCarousel />;
          case "Trending":
            return <Trending />;
          case "About":
            return <About />;
          case "FollowUs":
            return <FollowUs />;
          default:
            break;
        }
        return null;
      }}
    />
  );
}
