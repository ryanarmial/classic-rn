import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>INI ADALAH HALAMAN HOME</Text>
      <Button
        title="Pencet Aku Mas"
        onPress={() => navigation.navigate('About')}/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
});
export default Home;
