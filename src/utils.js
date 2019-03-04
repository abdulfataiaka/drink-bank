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
