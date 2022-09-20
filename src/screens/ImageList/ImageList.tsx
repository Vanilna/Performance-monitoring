import React, { useCallback } from 'react';
import { FlatList } from 'react-native';

import ImageCard from '@/components/ImageCard';
import useGetImageList, {
  ImageType,
} from '@/services/networking/useGetImageList';

import styles from './styles';

const ImageList = () => {
  const {
    images,
    fetchNextImages,
    refreshImages,
    isFetchingNextImages,
    isRefreshingImages,
  } = useGetImageList();

  const renderItem = useCallback(
    ({ item }: { item: ImageType }) => <ImageCard image={item} />,
    [],
  );

  if (!images) {
    return null;
  }

  return (
    <FlatList
      style={styles.container}
      data={images}
      renderItem={renderItem}
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
