import React from 'react';
import {View, Text, Button, StyleSheet, Image, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const OnboardingScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>
      <Image
        style={styles.text}
        source={require('../../public/images/home_screeen_bird.png')}
      />

      <Pressable
        style={styles.loginButton}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.loginText}>Sign-in</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    width: '100%',
    textAlign: 'center',
    color: '#5e828f',
    marginRight: 12,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 40,
    color: 'black',
  },
  loginText: {
    fontSize: 21,
    textAlign: 'center',
    marginHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 27,
    paddingRight: 27,
    color: 'black',
    fontWeight: 'condensed',
    width: '100%',
  },

  loginButton: {
    color: 'purple',
    fontWeight: 'bold',
    borderColor: '#b9bbbd',
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: '#bddeff',
  },
});

export default OnboardingScreen;
