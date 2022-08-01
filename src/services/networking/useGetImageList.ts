import { useQuery } from '@tanstack/react-query';

import apiClient from '@/services/networking/apiClient';

const fetchImageList = async () => {
  const response = await apiClient.get('', {
    params: {
      page: 1,
      per_page: 10,
    },
  });

  return response;
};

const useGetImageList = () => {
  const { data } = useQuery(['imageList'], fetchImageList);

  console.log(data);
  return data?.data.hits;
};

export default useGetImageList;
