import React from 'react';
import { FlatList } from 'react-native';

import ImageCard from '@/components/ImageCard';
import useGetImageList from '@/services/networking/useGetImageList';

import styles from './styles';

const ImageList = () => {
  const {
    images,
    fetchNextImages,
    refreshImages,
    isFetchingNextImages,
    isRefreshingImages,
  } = useGetImageList();
  if (!images) {
    return null;
  }

  return (
    <FlatList
      style={styles.container}
      data={images}
      renderItem={({ item }) => <ImageCard image={item} />}
      keyExtractor={(item) => `${item.id}-${item.user}`}
      initialNumToRender={10}
      onEndReached={() => fetchNextImages()}
      onEndReachedThreshold={0.5}
      onRefresh={refreshImages}
      refreshing={!isFetchingNextImages && isRefreshingImages}
    />
  );
};

export default ImageList;
