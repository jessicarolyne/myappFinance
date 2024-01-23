import * as React from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';

export default function CustomComponent() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <Text style={styles.text}>
          We are working with Dark Mode
        </Text>
      </View>
    </SafeAreaView>
  )
};
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
  },
});