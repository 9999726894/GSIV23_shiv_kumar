

export const getFilterMovie = ( movieList, searchText ) => {
    let result;
    if (searchText !== "") {
        result = movieList.filter((movie) => movie.title.toLowerCase().includes(searchText.toLowerCase()));
    } else {
        result = movieList;
    }
      console.log(result);
      return result;
}