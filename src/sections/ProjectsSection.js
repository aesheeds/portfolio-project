import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import { colors } from '../theme/colors';

function chunkArray(arr, size) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

export default function ProjectsSection() {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 800;

  const rows = isDesktop ? chunkArray(projects, 2) : null;

  return (
    <View style={styles.container}>
      <View style={styles.sectionHeader}>
        <View style={styles.accentBar} />
        <Text style={styles.heading}>Projects</Text>
        <Text style={styles.subtext}>
          A selection of work that demonstrates my front-end skills, creativity, and attention to detail.
        </Text>
      </View>

      {isDesktop ? (
        <View style={styles.grid}>
          {rows.map((row, rowIndex) => (
            <View key={rowIndex} style={styles.row}>
              {row.map((project) => (
                <View key={project.id} style={styles.cell}>
                  <ProjectCard {...project} />
                </View>
              ))}
              {/* pad odd rows so the last card doesn't stretch full width */}
              {row.length < 2 && <View style={styles.cell} />}
            </View>
          ))}
        </View>
      ) : (
        <View style={styles.list}>
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 32,
    backgroundColor: colors.backgroundAlt,
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
    marginBottom: 8,
  },
  subtext: {
    color: colors.muted,
    fontSize: 15,
    lineHeight: 24,
  },
  grid: {
    gap: 16,
  },
  row: {
    flexDirection: 'row',
    gap: 16,
  },
  cell: {
    flex: 1,
  },
  list: {
    gap: 16,
  },
});
