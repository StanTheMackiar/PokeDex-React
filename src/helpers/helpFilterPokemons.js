export const helpFilterPokemons = (response) => {
    if (response) {
      if (search.length === 0) {
        pokemonLength = response.length;
        return response.slice(currentPage, currentPage + 20);
      } else {
        const filterName = response.filter(
          (el) => el.name && el.name.includes(search)
        );
        const filterID = response.filter(
          (el) => el.id && el.id.toString() === search
        );
        const filterType1 = response.filter(
          (el) => el.type1 && el.type1.includes(search)
        );
        const filterType2 = response.filter(
          (el) => el.type2 && el.type2.includes(search)
        );
        const filtered = [
          ...filterName,
          ...filterID,
          ...filterType1,
          ...filterType2,
        ];
        pokemonLength = filtered.length;
        return filtered.slice(currentPage, currentPage + 20);
      }
    }
  };