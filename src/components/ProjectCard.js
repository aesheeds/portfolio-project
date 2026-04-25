import React from 'react';
import { View, Text, Image, StyleSheet, Pressable, Linking } from 'react-native';
import { colors } from '../theme/colors';

export default function ProjectCard({ title, description, image, liveLink, codeLink }) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} resizeMode="cover" />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>

        <View style={styles.buttons}>
          <Pressable onPress={() => Linking.openURL(liveLink)} style={styles.button}>
            <Text style={styles.buttonText}>Live Demo</Text>
          </Pressable>
          <Pressable onPress={() => Linking.openURL(codeLink)} style={styles.buttonSecondary}>
            <Text style={styles.buttonTextSecondary}>Source Code</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 18,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 300,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    color: colors.text,
    marginBottom: 8,
  },
  description: {
    color: colors.muted,
    lineHeight: 22,
    marginBottom: 14,
  },
  buttons: {
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap',
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 999,
  },
  buttonSecondary: {
    backgroundColor: '#ffe0ea',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 999,
  },
  buttonText: {
    color: colors.white,
    fontWeight: '700',
  },
  buttonTextSecondary: {
    color: colors.primaryDark,
    fontWeight: '700',
  },
});