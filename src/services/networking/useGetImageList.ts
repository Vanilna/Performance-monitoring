import { useQuery } from '@tanstack/react-query';

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

const fetchImageList = async () => {
  const response = await apiClient.get<ImageListResponse>('', {
    params: {
      page: 1,
      per_page: 10,
    },
  });

  return response;
};

const useGetImageList = () => {
  const { data } = useQuery(['imageList'], fetchImageList);
  const imageList = data?.data.hits;
  const imageListMapped: ImageType[] | undefined = imageList?.map(
    ({ id, largeImageURL, tags, user, userImageURL, views, likes }) => {
      return { id, largeImageURL, tags, user, userImageURL, views, likes };
    },
  );
  return {
    images: imageListMapped,
  };
};

export default useGetImageList;
