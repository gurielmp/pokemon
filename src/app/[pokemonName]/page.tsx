import { PokemonImage } from "@/components/pokemon-image"
import { getPokemon } from "@/lib/pokemonAPI"

export default async function PokemonPage({
  params,
}: {
  params: { pokemonName: string }
}) {
  const { pokemonName } = params
  const pokemonObject = await getPokemon(pokemonName)

  const secondType =
    pokemonObject.types.length > 1
      ? ", " + pokemonObject.types[1].type.name
      : ""

  return (
    <div className="m-5 flex h-fit w-[20rem] flex-col items-center justify-center rounded-2xl bg-neutral-300 bg-opacity-50 px-3 py-2 shadow-xl shadow-neutral-500 backdrop-blur-sm backdrop-filter dark:bg-neutral-500 dark:bg-opacity-50 dark:shadow-neutral-900">
      <h1 className="text-4xl font-bold pt-4">
        {pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}
      </h1>
      <div
        className="m-4"
        style={{ position: "relative", width: "300px", height: "300px" }}
      >
        <PokemonImage
          image={pokemonObject.sprites.other["official-artwork"].front_default}
          name={pokemonName}
        />
      </div>
      <ul className="mb-4">
        <li>Weight : {pokemonObject.weight}</li>
        <li>Height : {pokemonObject.height}</li>
        <li>
          Type : {pokemonObject.types[0].type.name}
          {secondType ? secondType : ""}
        </li>
        <li>Species : {pokemonObject.species.name}</li>
        <li>
          Abilitiy : {pokemonObject.abilities[0].ability.name},{" "}
          {pokemonObject.abilities[1].ability.name}
        </li>
      </ul>
    </div>
  )
}
