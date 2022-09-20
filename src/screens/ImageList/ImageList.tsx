import { FlashList } from '@shopify/flash-list';
import React, { useCallback } from 'react';
import { View } from 'react-native';

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
    ({ item }: { item: ImageType }) => <ImageCard {...item} />,
    [],
  );

  if (!images) {
    return null;
  }

  return (
    <View style={styles.container}>
      <FlashList
        data={images}
        renderItem={renderItem}
        keyExtractor={(item) => `${item.id}-${item.user}`}
        onEndReached={() => fetchNextImages()}
        onEndReachedThreshold={0.5}
        onRefresh={refreshImages}
        refreshing={!isFetchingNextImages && isRefreshingImages}
        estimatedItemSize={199}
      />
    </View>
  );
};

export default ImageList;
