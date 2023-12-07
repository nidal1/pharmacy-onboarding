import { View } from 'react-native';
import React from 'react';

export default function OnboardingPaginationItem({ active }) {
  if (!active) {
    return (
      <View
        style={{
          width: 6,
          height: 6,
          borderRadius: 6,
          backgroundColor: '#CFD8DD',
        }}
      />
    );
  }
  return (
    <View
      style={{
        width: 12,
        height: 4,
        borderRadius: 12,
        backgroundColor: '#FEC107',
      }}
    />
  );
}
