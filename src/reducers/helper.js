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