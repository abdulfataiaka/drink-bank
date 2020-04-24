import axios from 'axios';

export const fetchBeers = () => (
  axios.get('https://api.punkapi.com/v2/beers') // This should be set as a constant 
    .then(response => {
      const { data } = response;
      const beers = {};

      data.forEach(beer => { // Use Array HOF as mush as possible
        beers[beer.id] = beer // Check _.keyOf
      });

      return beers;
    })
    .catch(() => {
      return null // No user notification when this fails
    })
)
