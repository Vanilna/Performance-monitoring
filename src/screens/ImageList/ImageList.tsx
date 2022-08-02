import React from 'react';
import { View } from 'react-native';

import ImageCard from '@/components/ImageCard';
import useGetImageList from '@/services/networking/useGetImageList';

import styles from './styles';

const ImageList = () => {
  const { images } = useGetImageList();
  if (!images) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ImageCard image={images[0]} />
    </View>
  );
};

export default ImageList;
