const baseUrl = 'https://covid19.mathdro.id/api';

export const endpointUrls = {
  META_DATA: () => {
    return baseUrl;
  },
  COUNTRY_LIST: () => {
    return `${baseUrl}/countries`;
  }
};
