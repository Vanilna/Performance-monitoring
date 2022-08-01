import axios from 'axios';

import { API_KEY, API_URL } from '@/config/env';

const apiClient = axios.create({
  baseURL: `${API_URL}?key=${API_KEY}`,
});

export default apiClient;
