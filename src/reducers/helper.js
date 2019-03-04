const maxcount = 6;

export const updateHomeBeerIds = (beerIds, homeBeerIds) => {
  beerIds = beerIds || [];
  homeBeerIds = homeBeerIds || [];

  let index;
  let addcount = 0;
  const count = homeBeerIds.length;
  const curIndex = count <= 0 ? 0 : count;
  
  const result = [ ...homeBeerIds ];
  
  for(index=curIndex; index < beerIds.length; index++) {
    if (addcount >= maxcount) break;

    const beerId = beerIds[index];

    if (!result.includes(beerId)) {
      result.push(beerId);
      addcount += 1;
    }
    
  }

  return result;
}

export const updateFavourites = (favouritesBeerIds, id) => {
  let result = [ ...favouritesBeerIds ];

  if (!result.includes(id)) result.push(id);
  else result = result.filter(beerId => beerId !== id);

  return result;
}

export const advancedSearch = (beers, props) => {
  if (!beers) return null;
  console.log(Object.values(props));
  if(!Object.values(props).some(value => value !== null)) {
    return null;
  }

  beers = Object.values(beers);
  let { minIbu, maxIbu } = props;

  if (minIbu !== null && maxIbu < minIbu) {
    maxIbu = minIbu;
  }

  return beers.filter(beer => (
    minIbu !== null && beer.ibu >= minIbu &&
    maxIbu !== null && beer.ibu <= maxIbu
  ));
}
