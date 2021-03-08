import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { tambah, kurang } from "../redux/action";

const Content = props => {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text>Nilai Sekarang: {counter}</Text>
      <View style={styles.btn}>
        <Button
            title="Tambah"
            color="#000000"
            onPress={() => dispatch(tambah(counter))}
        />
      </View>
      <View style={styles.btn}>
        <Button
            title="Kurang"
            color="#000000"
            onPress={() => dispatch(kurang(counter))}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
      backgroundColor: 'white',
      marginTop:10,
  }
});

export default Content;