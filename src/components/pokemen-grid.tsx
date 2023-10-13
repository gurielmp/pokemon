import { PokemonSearch } from "./pokemon-search"

interface PokemonGridProps {
  pokemonList: any
}

export function PokemonGrid({ pokemonList }: PokemonGridProps) {
  return (
    <>
      <PokemonSearch pokemonList={pokemonList} />
    </>
  )
}
