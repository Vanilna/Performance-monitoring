import useGetImageList from '@/services/networking/useGetImageList';
import React from 'react';
import { View, Text } from 'react-native';

const ImageList = () => {
  useGetImageList();
  return (
    <View>
      <Text>Pokemons</Text>
    </View>
  );
};

export default ImageList;
