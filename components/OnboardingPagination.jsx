import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useFonts } from '../contexts/FontsContext';
import OnboardingPaginationItem from './OnboardingPaginationItem';

const arrImage = require('../assets/right-arr.png');

const styles = StyleSheet.create({
  swiperPagination: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginVertical: 16,
  },
  swiperPaginationButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  swiperPaginationText: {
    fontSize: 14,
    fontWeight: 800,
    color: '#1C3146',
  },
});

const { swiperPagination, swiperPaginationButton, swiperPaginationText } =
  styles;

export default function OnboardingPagination({ itemsLength, dotIndex }) {
  return (
    <View style={swiperPagination}>
      {Array.from({ length: itemsLength }).map((_, idx) => {
        // Do not use array index as keys this is only a tempo solution
        return (
          <OnboardingPaginationItem
            key={idx}
            active={dotIndex !== null && dotIndex - 1 === idx}
          />
        );
      })}
    </View>
  );
}

export function OnboardingNextButton({ currentIndex, onClickNextPagination }) {
  const { fontsLoaded } = useFonts();
  const fontFamilyReg = fontsLoaded ? 'Raleway-Regular' : '';

  return (
    <View style={swiperPaginationButton}>
      <Text
        style={{
          ...swiperPaginationText,
          fontFamily: fontFamilyReg,
        }}
        onPress={onClickNextPagination}
      >
        {currentIndex < 4 ? 'Next' : 'Continue'}
      </Text>
    </View>
  );
}
