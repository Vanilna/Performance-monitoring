import React, { memo } from 'react';
import { View, Text } from 'react-native';
import FastImage from 'react-native-fast-image';

import { ImageType } from '@/services/networking/useGetImageList';

import styles, { getImageBorder } from './styles';

const ImageCard = ({
  previewURL,
  user,
  userImageURL,
  views,
  likes,
  tags,
}: ImageType) => {
  return (
    <View style={[styles.container, getImageBorder(tags)]}>
      <FastImage source={{ uri: previewURL }} style={styles.image} />
      <View style={styles.dataContainer}>
        <View style={styles.dataHeader}>
          <View style={styles.userContainer}>
            <FastImage
              source={{ uri: userImageURL }}
              style={styles.userAvatar}
            />
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

export default memo(ImageCard);
