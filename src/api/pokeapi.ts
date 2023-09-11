import axios from "axios";

const BASE_URL = "https://pokeapi.co/api/v2";

export async function getPokemonBatch(offset: number = 0, limit: number = 10) {
  const response = await axios.get(
    `${BASE_URL}/pokemon/?offset=${offset}&limit=${limit}`
  );
  return response.data;
}

export async function getPokemon(url: string) {
  const response = await axios.get(url);
  return response.data;
}

export async function getPokemonById(id: number) {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return response.data;
}
