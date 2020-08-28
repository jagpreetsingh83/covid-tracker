const baseUrl = 'https://covid19.mathdro.id/api';

export const endpointUrls = {
  COUNTRY_DATA: (country: string) => {
    return country ? `${baseUrl}/countries/${country}` : baseUrl;
  },
  COUNTRY_LIST: () => {
    return `${baseUrl}/countries`;
  }
};
