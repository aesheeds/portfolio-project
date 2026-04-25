import React, { useRef, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ScrollView, View, StyleSheet } from 'react-native';

import Navbar from './src/components/Navbar';
import Footer from './src/components/Footer';
import HomeSection from './src/sections/HomeSection';
import AboutSection from './src/sections/AboutSection';
import ProjectsSection from './src/sections/ProjectsSection';
import ContactSection from './src/sections/ContactSection';
import { colors } from './src/theme/colors';

const SECTION_KEYS = ['home', 'about', 'projects', 'contact'];

export default function App() {
  const scrollRef = useRef(null);
  const [activeSection, setActiveSection] = useState('home');
  const sectionOffsets = useRef({});

  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    projects: useRef(null),
    contact: useRef(null),
  };

  const scrollToSection = (key) => {
    sectionRefs[key]?.current?.measureLayout(
      scrollRef.current.getInnerViewNode(),
      (x, y) => {
        scrollRef.current.scrollTo({ y, animated: true });
      },
      () => {}
    );
  };

  const handleScroll = (event) => {
    const scrollY = event.nativeEvent.contentOffset.y;
    let active = 'home';
    for (const key of SECTION_KEYS) {
      const offset = sectionOffsets.current[key];
      if (offset !== undefined && scrollY + 80 >= offset) {
        active = key;
      }
    }
    setActiveSection(active);
  };

  return (
    <SafeAreaProvider>
      <View style={styles.root}>
        <Navbar scrollToSection={scrollToSection} activeSection={activeSection} />
        <ScrollView
          ref={scrollRef}
          style={styles.scroll}
          contentContainerStyle={styles.content}
          onScroll={handleScroll}
          scrollEventThrottle={16}
        >
          <View
            ref={sectionRefs.home}
            collapsable={false}
            onLayout={(e) => { sectionOffsets.current.home = e.nativeEvent.layout.y; }}
          >
            <HomeSection scrollToSection={scrollToSection} />
          </View>

          <View
            ref={sectionRefs.about}
            collapsable={false}
            onLayout={(e) => { sectionOffsets.current.about = e.nativeEvent.layout.y; }}
          >
            <AboutSection />
          </View>

          <View
            ref={sectionRefs.projects}
            collapsable={false}
            onLayout={(e) => { sectionOffsets.current.projects = e.nativeEvent.layout.y; }}
          >
            <ProjectsSection />
          </View>

          <View
            ref={sectionRefs.contact}
            collapsable={false}
            onLayout={(e) => { sectionOffsets.current.contact = e.nativeEvent.layout.y; }}
          >
            <ContactSection />
          </View>

          <Footer />
        </ScrollView>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scroll: {
    flex: 1,
  },
  content: {
    paddingBottom: 20,
  },
});
