import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { useFonts } from '../contexts/FontsContext';

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    color: '#1C3146',
    fontSize: 28,
    fontStyle: 'normal',
    fontWeight: 800,
    letterSpacing: -0.84,
    maxWidth: Dimensions.get('window').width * 0.7,
  },
  subTitle: {
    textAlign: 'center',
    color: '#A7B0B5',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: 400,
    maxWidth: Dimensions.get('window').width * 0.7,
  },
});

export default function OnboardingItem({ item }) {
  const { source, title, subTitle } = item;
  const { fontsLoaded } = useFonts();
  const { subTitle: subTitleStyle, title: titleStyle } = styles;
  const fontFamilyBold = fontsLoaded ? 'Raleway-Bold' : '';
  const fontFamilyReg = fontsLoaded ? 'Raleway-Regular' : '';
  return (
    <View style={{ width: Dimensions.get('window').width }}>
      <Image source={source} />

      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
          marginTop: 20,
        }}
      >
        <Text
          style={{
            ...titleStyle,
            fontFamily: fontFamilyBold,
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            ...subTitleStyle,
            fontFamily: fontFamilyReg,
          }}
        >
          {subTitle}
        </Text>
      </View>
    </View>
  );
}
