import { PokemonGrid } from "@/components/pokemen-grid"
import { getPokemonList } from "@/lib/pokemonAPI"

export default async function Home() {
  const pokemonList = await getPokemonList()
  return <PokemonGrid pokemonList={pokemonList} />
}
