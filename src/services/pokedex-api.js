
export function getPokemon(options) {
    const url = 'https://alchemy-pokedex.herokuapp.com/api/pokedex';

    const page = options.page || 1;
    const search = options.search;

    // const url = `${URL}?page=${page || 1}&search=${search || ''}`;

    return fetch(url)
        .then(response => response.json());
    // .then(results => {
    //     return {
    //         count: 100 * page,
    //         results: results
    //     };
};
