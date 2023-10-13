const POKEMON_API = "https://pokeapi.co/api/v2/"


export async function getPokemonList() {
  const response = await fetch(POKEMON_API + "pokemon?limit=500&offset=0")
  const data = await response.json()
  return data.results
}

export async function getPokemon(name: string) {
  const response = await fetch(POKEMON_API + "pokemon/" + name)
  const data = await response.json()
  return data
}

export async function getPokemonType() {
  const response = await fetch(POKEMON_API + "type?limit=18&offset=0")
  const data = await response.json()
  return data
}