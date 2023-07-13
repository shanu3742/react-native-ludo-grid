import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import HorizontalCard from './component/horizentalCard/horizentalCard';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>

  <HorizontalCard />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height:300,
    marginTop:100

 
  },
});
