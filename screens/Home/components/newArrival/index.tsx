import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Card from "./Card";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function NewArrival() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const category = ["All", "Apparel", "Dress", "Tshirt", "Bag"];
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>New Arrival</Text>
      <View style={styles.devider}>
        <View style={styles.deviderBox}></View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginBottom: 20,
        }}
      >
        {category.map((item, index) => {
          return (
            <View>
              <Text
                style={[
                  styles.categoryText,
                  selectedCategory === item
                    ? { color: "black" }
                    : { color: "#88888876" },
                ]}
                key={index}
                onPress={() => setSelectedCategory(item)}
              >
                {item}
              </Text>
              {selectedCategory === item ? (
                <View
                  style={{
                    width: 4,
                    height: 4,
                    backgroundColor: "#DD8560",
                    alignSelf: "center",
                    transform: [{ rotate: "45deg" }],
                  }}
                ></View>
              ) : null}
            </View>
          );
        })}
      </View>
      <View style={styles.cardContainer}>
        <Card selectedCategory={selectedCategory} />
        <Card selectedCategory={selectedCategory} />
      </View>
      <View style={styles.cardContainer}>
        <Card selectedCategory={selectedCategory} />
        <Card selectedCategory={selectedCategory} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    justifyContent: "center",
    alignContent: "center",
  },
  heading: {
    textAlign: "center",
    paddingBottom: 5,
    fontSize: 30,
    fontWeight: "100",
  },
  devider: {
    width: 200,
    height: 1,
    backgroundColor: "#c2c2c2",
    alignSelf: "center",
    marginBottom: 10,
    position: "relative",
  },
  deviderBox: {
    width: 10,
    height: 10,
    backgroundColor: "#F2F2F2",
    borderWidth: 1,
    borderBlockColor: "black",
    alignSelf: "center",
    position: "absolute",
    transform: [{ rotate: "45deg" }, { translateY: -6 }],
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 20,
    marginBottom: 20,
  },
  categoryText: {
    fontSize: 18,
  },
});
