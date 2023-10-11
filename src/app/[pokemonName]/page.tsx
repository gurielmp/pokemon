import { PokemonImage } from "@/components/pokemon-image"
import { getPokemon } from "@/lib/pokemonAPI"
import Image from "next/image"

export default async function PokemonPage({
  params,
}: {
  params: { pokemonName: string }
}) {
  const { pokemonName } = params
  const pokemonObject = await getPokemon(pokemonName)

  console.log(pokemonObject)

  return (
    <>
      <h1 className="text-4xl font-bold pt-4">{pokemonName}</h1>
      <div
        className="m-4"
        style={{ position: "relative", width: "300px", height: "300px" }}
      >
        <PokemonImage
          image={pokemonObject.sprites.other["official-artwork"].front_default}
          name={pokemonName}
        />
      </div>
    </>
  )
}
