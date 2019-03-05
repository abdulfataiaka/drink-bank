import history from './history';

export const onPageChange = (callback) => {
  let currentPage = history.location.pathname;

  history.listen((newloc) => {
    const prevPage = currentPage;
    const nextPage = newloc.pathname;
    currentPage = nextPage;
  
    if (prevPage == nextPage) return;
    callback(prevPage, nextPage);
  });
}

export const getPage = () => (
  history.location.pathname
);

export const toNum = (value) => {
  value = parseFloat(value, 10);
  return value || value === 0 ? value : null;
};

export const dateCompare = (date, argument) => {
  date = date.split('/').map(value => parseInt(value));
  argument = argument.split('/').map(value => parseInt(value));

  if (
    date[1] > argument[1] ||
    (
      date[1] === argument[1] &&
      date[0] > argument[0]
    )
  ) return 1;

  if (
    date[1] === argument[1] &&
    date[0] === argument[0]
  ) return 0;
  
  return -1;
}

export const advancedSearch = (beers, params) => {
  let {
    brewedBefore, brewedAfter, minIbu,
    maxIbu, minAbv, maxAbv, minEbc, maxEbc,
    query
  } = params;

  beers = Object.values(beers);

  const ibuchk = minIbu !== null && maxIbu !== null && maxIbu < minIbu;
  const abvchk = minAbv !== null && maxAbv !== null && maxAbv < minAbv;
  const ebcchk = minEbc !== null && maxEbc !== null && maxEbc < minEbc;
  
  const brewedchk = (
    brewedAfter &&
    brewedBefore &&
    dateCompare(brewedAfter, brewedBefore) == -1
  );

  if (ibuchk) { maxIbu = null; }
  if (abvchk) { maxAbv = null; }
  if (ebcchk) { maxEbc = null; }
  if (brewedchk) { brewedAfter = null; }

  const result = beers.filter(beer => {
    let match = true;

    if (query) {
      const regex = new RegExp(`^${query.toLowerCase()}`);
      match = (
        !!beer.name.toLowerCase().match(regex) ||
        !!beer.tagline.toLowerCase().match(regex)
      );
    }

    if (match && minIbu) {
      match = beer.ibu >= minIbu;
    }

    if (match && maxIbu) {
      match = beer.ibu <= maxIbu;
    }

    if (match && minAbv) {
      match = beer.abv >= minAbv;
    }

    if (match && maxAbv) {
      match = beer.abv <= maxAbv;
    }

    if (match && minEbc) {
      match = beer.ebc >= minEbc;
    }

    if (match && maxEbc) {
      match = beer.ebc <= maxEbc;
    }

    if (match && brewedBefore && !brewedAfter) {
      match = dateCompare(beer.first_brewed, brewedBefore) == -1;
    }

    if (match && !brewedBefore && brewedAfter) {
      match = dateCompare(beer.first_brewed, brewedAfter) == 1;
    }

    return match && brewedBefore && brewedAfter
      ? ( 
        dateCompare(beer.first_brewed, brewedBefore) == -1 ||
        dateCompare(beer.first_brewed, brewedAfter) == 1
      ) : match
  });

  return result.map(beer => beer.id);
}
