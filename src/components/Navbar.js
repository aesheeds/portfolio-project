import React from 'react';
import { View, Text, Pressable, StyleSheet, useWindowDimensions } from 'react-native';
import { colors } from '../theme/colors';

export default function Navbar({ scrollToSection, activeSection }) {
  const { width } = useWindowDimensions();
  const isMobile = width < 720;

  const links = [
    { label: 'Home', key: 'home' },
    { label: 'About', key: 'about' },
    { label: 'Projects', key: 'projects' },
    { label: 'Contact', key: 'contact' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Shellsea Nunez-Aviles</Text>

      <View style={[styles.links, isMobile && styles.linksMobile]}>
        {links.map((item) => {
          const isActive = activeSection === item.key;
          return (
            <Pressable
              key={item.key}
              onPress={() => scrollToSection(item.key)}
              style={({ pressed }) => [
                styles.link,
                isActive && styles.linkActive,
                pressed && styles.linkPressed,
              ]}
            >
              <Text style={[styles.linkText, isActive && styles.linkTextActive]}>
                {item.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 14,
    backgroundColor: 'rgba(255,255,255,0.96)',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    position: 'sticky',
    top: 0,
    zIndex: 50,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  logo: {
    fontSize: 22,
    fontWeight: '800',
    color: colors.primary,
    letterSpacing: 0.5,
  },
  links: {
    flexDirection: 'row',
    gap: 6,
    flexWrap: 'wrap',
  },
  linksMobile: {
    marginTop: 10,
  },
  link: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 999,
    backgroundColor: 'transparent',
  },
  linkActive: {
    backgroundColor: colors.primary,
  },
  linkPressed: {
    opacity: 0.75,
  },
  linkText: {
    color: colors.primaryDark,
    fontWeight: '700',
    fontSize: 14,
  },
  linkTextActive: {
    color: colors.white,
  },
});
