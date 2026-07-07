import { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

function App() {
  const [count, setCount] = useState(0);
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={{ margin: 10 }}>
          <Text style={styles.mainHeading}>Hello There !!!</Text>
        </View>
        <View>
          <Text style={styles.subHeading}>
            This is the first app with a counter
          </Text>
          <Text style={{ ...styles.subHeading, marginTop: 10 }}>
            Count: {count}
          </Text>
        </View>
        <View style={{ marginVertical: 20, flex: 1, gap: 15 }}>
          <Button title="Increase" onPress={() => setCount(prev => prev + 1)} />
          <Button title="Decrese" onPress={() => setCount(prev => prev - 1)} />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  mainHeading: {
    fontSize: 30,
    color: 'lightblue',
    textAlign: 'center',
  },
  subHeading: {
    fontSize: 17,
    color: 'lightblue',
    textAlign: 'center',
  },
});

export default App;
