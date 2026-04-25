import React from 'react';
import { View, Text, StyleSheet, Pressable, Linking } from 'react-native';
import { colors } from '../theme/colors';

export default function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>© {new Date().getFullYear()} Shellsea Nunez-Aviles. Built with React Native Web.</Text>

      <View style={styles.links}>
        <Pressable onPress={() => Linking.openURL('https://github.com/aesheeds')}>
          <Text style={styles.link}>GitHub</Text>
        </Pressable>
        <Pressable onPress={() => Linking.openURL('https://linkedin.com/in/shenunavi/')}>
          <Text style={styles.link}>LinkedIn</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 18,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    backgroundColor: 'rgba(255,255,255,0.9)',
    alignItems: 'center',
    gap: 10,
  },
  text: {
    color: colors.muted,
    textAlign: 'center',
  },
  links: {
    flexDirection: 'row',
    gap: 16,
    flexWrap: 'wrap',
  },
  link: {
    color: colors.primary,
    fontWeight: '700',
  },
});