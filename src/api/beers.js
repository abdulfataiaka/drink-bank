import axios from 'axios';

export const fetchBeers = () => (
  axios.get('https://api.punkapi.com/v2/beers?per_page=6')
    .then(response => {
      const { data: beers } = response;
      return beers;
    })
    .catch(() => {
      return null
    })
)
