import React from 'react';
import {
  View, Text, Image, ImageBackground,
  StyleSheet, Pressable, useWindowDimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../theme/colors';

function HeroText({ scrollToSection }) {
  return (
    <View style={styles.heroTextBlock}>
      <Text style={styles.eyebrow}>Hi there, I'm</Text>
      <Text style={styles.name}>Shellsea</Text>
      <View style={styles.accentBar} />
      <Text style={styles.role}>Front-End Developer & UI Designer</Text>
      <Text style={styles.subtitle}>
        I craft creative and functional websites! My goal is to implement design and code to create fun experiences on the web!
      </Text>
      <View style={styles.buttons}>
        <Pressable
          onPress={() => scrollToSection?.('projects')}
          style={({ pressed }) => [styles.primaryBtn, pressed && { opacity: 0.8 }]}
        >
          <Text style={styles.primaryBtnText}>View My Work ↓</Text>
        </Pressable>
        <Pressable
          onPress={() => scrollToSection?.('contact')}
          style={({ pressed }) => [styles.outlineBtn, pressed && { opacity: 0.8 }]}
        >
          <Text style={styles.outlineBtnText}>Get In Touch</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default function HomeSection({ scrollToSection }) {
  const { width, height } = useWindowDimensions();
  const isDesktop = width >= 768;
  const heroHeight = Math.max(580, height * 0.88);

  if (isDesktop) {
    return (
      <View style={[styles.containerDesktop, { minHeight: heroHeight }]}>
        <LinearGradient
          colors={['#fff5f8', '#fce4ec']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={[styles.textPanel, { minHeight: heroHeight }]}
        >
          <HeroText scrollToSection={scrollToSection} />
        </LinearGradient>

        <View style={[styles.imagePanel, { height: heroHeight }]}>
          <Image
            source={require('../../assets/hero.jpg')}
            style={StyleSheet.absoluteFillObject}
            resizeMode="cover"
          />
        </View>
      </View>
    );
  }

  return (
    <ImageBackground
      source={require('../../assets/hero.jpg')}
      style={{ minHeight: 560 }}
      resizeMode="cover"
    >
      <LinearGradient
        colors={['rgba(255,245,248,0.55)', 'rgba(255,232,240,0.82)', colors.background]}
        locations={[0, 0.45, 1]}
        style={styles.overlayMobile}
      >
        <HeroText scrollToSection={scrollToSection} />
      </LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  heroTextBlock: {
    maxWidth: 400,
    width: '100%',
  },
  containerDesktop: {
    flexDirection: 'row',
    overflow: 'hidden',
  },
  textPanel: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  imagePanel: {
    flex: 1,
    overflow: 'hidden',
  },
  overlayMobile: {
    minHeight: 560,
    justifyContent: 'flex-end',
    paddingHorizontal: 28,
    paddingBottom: 52,
  },
  eyebrow: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.primary,
    letterSpacing: 3,
    textTransform: 'uppercase',
    marginBottom: 10,
  },
  name: {
    fontSize: 64,
    fontWeight: '900',
    color: colors.text,
    lineHeight: 68,
    marginBottom: 12,
  },
  accentBar: {
    width: 56,
    height: 5,
    backgroundColor: colors.primary,
    borderRadius: 3,
    marginBottom: 18,
  },
  role: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.primaryDark,
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 15,
    color: colors.muted,
    lineHeight: 24,
    marginBottom: 32,
    maxWidth: 400,
  },
  buttons: {
    flexDirection: 'row',
    gap: 12,
    flexWrap: 'wrap',
  },
  primaryBtn: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 999,
  },
  outlineBtn: {
    backgroundColor: 'transparent',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 999,
    borderWidth: 2,
    borderColor: colors.primary,
  },
  primaryBtnText: {
    color: colors.white,
    fontWeight: '800',
    fontSize: 15,
  },
  outlineBtnText: {
    color: colors.primary,
    fontWeight: '800',
    fontSize: 15,
  },
});
