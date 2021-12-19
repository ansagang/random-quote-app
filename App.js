import { View } from 'react-native';
import Home from './screens/Home';
import { StyleSheet } from 'react-native';

export default function App() {
  const styles = StyleSheet.create({
    wrapper: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  return (
    <View style={styles.wrapper}>
      <Home />
    </View>
  );
}