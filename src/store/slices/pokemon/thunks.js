import { pokeApi } from '../../../api/pokeApi';
import { setPokemons, startLoadingPokemons } from './pokeSlice';

export const getPokemons =
  (page = 0) =>
  async (dispatch, getState) => {
    dispatch(startLoadingPokemons());

    const { data } = await pokeApi.get(`/pokemon?limit=10&offset=${page * 10}`);

    dispatch(setPokemons({ pokemons: data.results, page: page + 1 }));
  };
