import React from 'react';
import { View, Image, Text } from 'react-native';

import { ImageType } from '@/services/networking/useGetImageList';

import styles from './styles';

type Props = {
  image: ImageType;
};

const ImageCard = ({ image }: Props) => {
  const { largeImageURL, user, userImageURL, views, likes, tags } = image;
  return (
    <View style={styles.container}>
      <Image source={{ uri: largeImageURL }} style={styles.image} />
      <View style={styles.dataContainer}>
        <View style={styles.dataHeader}>
          <View style={styles.userContainer}>
            <Image source={{ uri: userImageURL }} style={styles.userAvatar} />
            <Text style={styles.userName}>{user}</Text>
          </View>
          <View style={styles.counter}>
            <Text style={styles.counterText}>{`Views: ${views}`}</Text>
            <Text style={styles.counterText}>{`Likes: ${likes}`}</Text>
          </View>
        </View>
        <Text style={styles.tags}>{tags}</Text>
      </View>
    </View>
  );
};

export default ImageCard;
