import React, { useState } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import Card from "./Card";
import CompanyLogos from "./companyLogos";
import Devider from "../../../../components/devider";

export default function NewArrival() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const category = ["All", "Apparel", "Dress", "Tshirt", "Bag"];
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>New Arrival</Text>
      <Devider />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginBottom: 20,
        }}
      >
        {category.map((item, index) => {
          return (
            <View key={index}>
              <Text
                style={[
                  styles.categoryText,
                  selectedCategory === item
                    ? { color: "black" }
                    : { color: "#88888876" },
                ]}
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
      <Pressable style={styles.customButton}>
        <Text style={styles.customButtonText}>EXPLORE MORE &#10142;</Text>
      </Pressable>
      <Devider />
      <CompanyLogos />
      <Devider />
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
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 20,
    marginBottom: 20,
  },
  categoryText: {
    fontSize: 18,
  },
  customButton: {
    borderWidth: 1,
    borderColor: "#a9a9a9",
    alignSelf: "center",
    paddingHorizontal: 40,
    paddingVertical: 10,
    marginBottom: 50,
  },
  customButtonText: {
    fontSize: 20,
    letterSpacing: 4,
    fontWeight: "300",
  },
});
