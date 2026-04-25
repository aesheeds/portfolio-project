import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, Linking } from 'react-native';
import { colors } from '../theme/colors';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Enter a valid email';
    if (!form.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = () => {
    const validation = validate();
    setErrors(validation);

    if (Object.keys(validation).length === 0) {
      setSuccess(true);
      setForm({ name: '', email: '', message: '' });
    } else {
      setSuccess(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.sectionHeader}>
        <View style={styles.accentBar} />
        <Text style={styles.heading}>Contact Me</Text>
        <Text style={styles.headingTagline}>Feel free to reach out for collaborations, opportunities, or questions.</Text>
      </View>
      <View style={styles.card}>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            value={form.name}
            onChangeText={(value) => setForm({ ...form, name: value })}
            style={styles.input}
            placeholder="Your name"
          />
          {errors.name && <Text style={styles.error}>{errors.name}</Text>}
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
            style={styles.input}
            placeholder="you@example.com"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          {errors.email && <Text style={styles.error}>{errors.email}</Text>}
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Message</Text>
          <TextInput
            value={form.message}
            onChangeText={(value) => setForm({ ...form, message: value })}
            style={[styles.input, styles.textarea]}
            placeholder="Write your message..."
            multiline
            numberOfLines={5}
          />
          {errors.message && <Text style={styles.error}>{errors.message}</Text>}
        </View>

        <Pressable onPress={handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>Send Message</Text>
        </Pressable>

        {success && <Text style={styles.success}>Thanks! Your message has been sent.</Text>}

        <Text style={styles.subheading}>Social Links</Text>
        <View style={styles.socialRow}>
          <Pressable onPress={() => Linking.openURL('https://github.com/aesheeds')}>
            <Text style={styles.socialLink}>GitHub</Text>
          </Pressable>
          <Pressable onPress={() => Linking.openURL('https://linkedin.com/in/shenunavi/')}>
            <Text style={styles.socialLink}>LinkedIn</Text>
          </Pressable>
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
  card: {
    backgroundColor: colors.card,
    borderRadius: 24,
    padding: 24,
    borderWidth: 1,
    borderColor: colors.border,
  },
  text: {
    color: colors.muted,
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 18,
  },
  formGroup: {
    marginBottom: 14,
  },
  label: {
    fontWeight: '700',
    marginBottom: 6,
    color: colors.text,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
    padding: 12,
    backgroundColor: '#fff',
  },
  textarea: {
    minHeight: 120,
    textAlignVertical: 'top',
  },
  error: {
    color: colors.error,
    marginTop: 6,
    fontSize: 13,
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    borderRadius: 999,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: colors.white,
    fontWeight: '800',
  },
  success: {
    color: colors.success,
    marginTop: 12,
    fontWeight: '700',
  },
  subheading: {
    fontSize: 22,
    fontWeight: '800',
    color: colors.primary,
    marginTop: 24,
    marginBottom: 12,
  },
  socialRow: {
    flexDirection: 'row',
    gap: 16,
    flexWrap: 'wrap',
  },
  socialLink: {
    color: colors.primary,
    fontWeight: '800',
  },
});