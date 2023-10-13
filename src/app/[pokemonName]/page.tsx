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
    <>
      <div className="m-5 flex h-fit w-[20rem] flex-col items-center justify-center rounded-2xl bg-neutral-300 bg-opacity-50 px-3 py-2 shadow-xl shadow-neutral-500 backdrop-blur-sm backdrop-filter dark:bg-neutral-500 dark:bg-opacity-50 dark:shadow-neutral-900">
        <h1 className="text-4xl font-bold pt-4">
          {pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}
        </h1>
        <div
          className="m-4"
          style={{ position: "relative", width: "300px", height: "300px" }}
        >
          <PokemonImage
            image={
              pokemonObject.sprites.other["official-artwork"].front_default
            }
            name={pokemonName}
          />
        </div>
        <ul className="mb-4">
          <li>Weight : {pokemonObject.weight}</li>
          <li>Height : {pokemonObject.height}</li>
          <li>
            Type :{" "}
            {pokemonObject.types[0].type.name.charAt(0).toUpperCase() +
              pokemonObject.types[0].type.name.slice(1)}
            {secondType ? secondType : ""}
          </li>
          <li>
            Species :{" "}
            {pokemonObject.species.name.charAt(0).toUpperCase() +
              pokemonObject.species.name.slice(1)}
          </li>
          <li>
            Abilitiy :{" "}
            {pokemonObject.abilities[0].ability.name.charAt(0).toUpperCase() +
              pokemonObject.abilities[0].ability.name.slice(1)}
            , {pokemonObject.abilities[1].ability.name}
          </li>
        </ul>
      </div>
      <div className="m-5 flex h-fit w-[20rem] flex-col justify-center rounded-2xl bg-neutral-300 bg-opacity-50 px-3 py-2 shadow-xl shadow-neutral-500 backdrop-blur-sm backdrop-filter dark:bg-neutral-500 dark:bg-opacity-50 dark:shadow-neutral-900">
        <div>
          <h1>Stats</h1>
        </div>

        {pokemonObject.stats.map((stat: any) => (
          <div key={stat.stat.name}>
            <div className="mb-1 text-base font-normal dark:text-blue-500">
              {stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1)}{" "}
              : {stat.base_stat}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
              <div
                className="bg-green-600 h-2.5 rounded-full dark:bg-gray-300"
                style={{ width: `${stat.base_stat}%`, maxWidth: "100%" }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
