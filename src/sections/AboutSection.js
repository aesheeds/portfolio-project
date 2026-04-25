import React from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native';
import { colors } from '../theme/colors';

const skills = [
  'React', 'JavaScript', 'HTML/CSS', 'React Native',
  'Responsive Design', 'UI/UX', 'Git/GitHub', 'Figma',
];

export default function AboutSection() {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 800;

  return (
    <View style={styles.container}>
      <View style={styles.sectionHeader}>
        <View style={styles.accentBar} />
        <Text style={styles.heading}>About Me</Text>
        <Text style={styles.headingTagline}>A little about who I am and what I love to build</Text>
      </View>

      <View style={[styles.columns, isDesktop && styles.columnsDesktop]}>

        <View style={isDesktop && styles.photoColumnDesktop}>
          <Image
            source={require('../../assets/aboutme.jpg')}
            style={styles.photo}
            resizeMode="cover"
          />
        </View>

        <View style={[styles.textColumn, isDesktop && styles.textColumnDesktop]}>
          <View style={styles.card}>
            <Text style={styles.cardHeading}>Who I Am</Text>
            <Text style={styles.text}>
              I'm a passionate developer who loves creating clean, user-friendly, and responsive digital experiences.
              I enjoy combining design with functionality to build websites that feel polished and modern.
            </Text>
            <Text style={[styles.text, styles.textSpaced]}>
              Designing is my passion, combining creativity and code is my goal!
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardHeading}>Interests</Text>
            <Text style={styles.text}>
              Front-end development, UI/UX design, animations, digital media/art, and learning new ways to push my skills and creativity in the Web Design field!
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardHeading}>Skills & Tools</Text>
            <View style={styles.skillsGrid}>
              {skills.map((skill) => (
                <View key={skill} style={styles.skillPill}>
                  <Text style={styles.skillText}>{skill}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 32,
    backgroundColor: colors.background,
  },
  sectionHeader: {
    marginBottom: 28,
  },
  accentBar: {
    width: 48,
    height: 5,
    backgroundColor: colors.primary,
    borderRadius: 3,
    marginBottom: 14,
  },
  heading: {
    fontSize: 36,
    fontWeight: '900',
    color: colors.text,
    marginBottom: 6,
  },
  headingTagline: {
    fontSize: 15,
    color: colors.muted,
  },
  columns: {
    gap: 20,
  },
  columnsDesktop: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  photoColumnDesktop: {
    flex: 1,
  },
  photo: {
    width: '100%',
    height: 500,
    borderRadius: 20,
  },
  textColumn: {
    gap: 16,
  },
  textColumnDesktop: {
    flex: 1,
  },
  card: {
    backgroundColor: colors.card,
    borderRadius: 20,
    padding: 22,
    borderWidth: 1,
    borderColor: colors.border,
  },
  cardHeading: {
    fontSize: 17,
    fontWeight: '800',
    color: colors.primary,
    marginBottom: 12,
  },
  text: {
    color: colors.muted,
    fontSize: 15,
    lineHeight: 24,
  },
  textSpaced: {
    marginTop: 12,
  },
  skillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  skillPill: {
    backgroundColor: '#ffe0ea',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: colors.border,
  },
  skillText: {
    color: colors.primaryDark,
    fontWeight: '700',
    fontSize: 13,
  },
});
