import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Button,
  TextInput,
  InteractionManager
} from "react-native";

export default function App() {
  const [name, setName] = useState("Maxxwell");
  const [age, setAge] = useState("27");
  const [textField] = useState("");

  const clickHandler = () => {
    setName();
  };

  const [people, setPeople] = useState([
    { name: "maxxwell", id: "1" },
    { name: "jack", id: "2" },
    { name: "mia", id: "3" },
    { name: "nico", id: "4" },
    { name: "luke", id: "5" },
    { name: "hentie", id: "6" },
    { name: "cyril", id: "7" },
    { name: "pravin", id: "8" },
    { name: "fouzan", id: "9" },
    { name: "pete", id: "10" },
    { name: "kazuya", id: "11" }
  ]);

  const pressHandler = id => {
    console.log(id);
    setPeople(prevPeople => {
      return prevPeople.filter(person => person.id != id);
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        keyExtractor={item => item.id}
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      {/* <ScrollView>
        {people.map(item => (
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        ))}
      </ScrollView> */}

      {/* <View style={styles.body}>
        <Text>Enter name:</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. John Smith"
          onChangeText={val => setName(val)}
        />
        <Text>Enter age:</Text>
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          placeholder="e.g. 30"
          onChangeText={val => setAge(val)}
        />
        <View style={styles.buttonContainer}>
          <Button title="Reset Name" onPress={clickHandler} />
        </View>
        <Text>
          name: {name}, age: {age}
        </Text>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20
    // alignItems: "center",
    // justifyContent: "center"
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24,
    marginHorizontal: 10,
    marginTop: 24
  }
  // buttonContainer: {
  //   marginTop: 20
  // },
  // input: {
  //   borderWidth: 1,
  //   borderColor: "#777",
  //   padding: 8,
  //   margin: 10,
  //   width: 200
  // },
  // header: {
  //   backgroundColor: "pink",
  //   padding: 20
  // },
  // boldText: {
  //   fontWeight: "bold"
  // },
  // body: {
  //   backgroundColor: "yellow",
  //   padding: 20
  // }
});
