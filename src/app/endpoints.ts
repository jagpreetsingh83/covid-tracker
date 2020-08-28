export const endpointUrls = {
  BASE: () => {
    return `https://covid19.mathdro.id/api`;
  },
  COUNTRY_LIST: () => {
    return `${this.BASE()}/countries`;
  }
};
