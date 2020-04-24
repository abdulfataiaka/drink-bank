const maxcount = 6; // Max count of what and by convetion this should be MAX_COUNT

export const updateHomeBeerIds = (beerIds, homeBeerIds) => {
  beerIds = beerIds || []; // use default parameters as much as possible
  homeBeerIds = homeBeerIds || [];

  let index;
  let addcount = 0;
  const count = homeBeerIds.length;
  const curIndex = count <= 0 ? 0 : count;
  
  const result = [ ...homeBeerIds ];
  
  // Use Array HOFs here, It makes code easy to read since it is declarative
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

  if (!result.includes(id)) result.push(id); // return early no `else`
  else result = result.filter(beerId => beerId !== id);

  return result;
}
