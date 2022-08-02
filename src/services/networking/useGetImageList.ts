import { useInfiniteQuery } from '@tanstack/react-query';

import apiClient from '@/services/networking/apiClient';

type ImageRaw = {
  id: string;
  pageURL: string;
  tags: string;
  previewURL: string;
  previewWidth: number;
  previewHeight: number;
  largeImageURL: string;
  fullHDURL: string;
  imageURL: string;
  imageWidth: number;
  imageHeight: number;
  imageSize: number;
  views: number;
  downloads: number;
  likes: number;
  comments: number;
  user_id: number;
  user: string;
  userImageURL: string;
};

export type ImageType = Pick<
  ImageRaw,
  'id' | 'largeImageURL' | 'tags' | 'user' | 'userImageURL' | 'views' | 'likes'
>;

type ImageListResponse = { hits: ImageRaw[] };

type FetchImageListParams = {
  pageParam?: number;
};

const fetchImageList = async ({ pageParam = 1 }: FetchImageListParams) => {
  const response = await apiClient.get<ImageListResponse>('', {
    params: {
      page: pageParam,
      per_page: 10,
    },
  });

  return response;
};

const useGetImageList = () => {
  let page = 0;
  const {
    data,
    fetchNextPage: fetchNextImages,
    refetch: refreshImages,
    isFetching: isRefreshingImages,
    isFetchingNextPage: isFetchingNextImages,
  } = useInfiniteQuery(['imageList'], fetchImageList, {
    getNextPageParam: () => page++,
  });

  const pages = data?.pages.map((item) => item.data.hits);
  const imageList = pages ? ([] as ImageRaw[]).concat(...pages) : null;
  const imageListMapped: ImageType[] | undefined = imageList?.map(
    ({ id, largeImageURL, tags, user, userImageURL, views, likes }) => {
      return { id, largeImageURL, tags, user, userImageURL, views, likes };
    },
  );

  return {
    images: imageListMapped,
    fetchNextImages,
    refreshImages,
    isFetchingNextImages,
    isRefreshingImages,
  };
};

export default useGetImageList;
