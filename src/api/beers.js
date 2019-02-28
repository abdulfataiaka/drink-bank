import axios from 'axios';

export const fetchBeers = () => (
  axios.get('https://api.punkapi.com/v2/beers')
    .then(response => {
      const { data } = response;
      const beers = {};

      data.forEach(beer => {
        beers[beer.id] = beer
      });
  
      return beers;
    })
    .catch(() => {
      return null
    })
)
