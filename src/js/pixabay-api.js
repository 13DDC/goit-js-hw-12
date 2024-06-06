import axios from 'axios';

export async function pixabayApi(findText, page) {
  try {
    const BASE_URL = 'https://pixabay.com/api/';
    const params = new URLSearchParams({
      key: '44163417-71574278e0bc921a5136b7d8e',
      q: findText,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      per_page: 15,
      page: page,
    });
    const url = `${BASE_URL}?${params}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    iziToast.error({
      position: 'topRight',
      message: 'Error',
    });
  }
}
