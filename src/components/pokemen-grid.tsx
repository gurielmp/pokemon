"use client"

import { useState } from "react"
import { PokemonCard } from "./pokemon-card"

interface PokemonGridProps {
  pokemonList: any
}

export function PokemonGrid({ pokemonList }: PokemonGridProps) {
  const [searchText, setSearctText] = useState("")

  console.log(pokemonList)

  return (
    <>
      <div>
        <h3 className="text-2xl py-6 text-center">Search For Your Pokemon</h3>
        <div className="grid w-full max-w-sm itmes-center gap-1.5">
          <label htmlFor="search">Pokemon Name</label>
          <input
            type="text"
            value={searchText}
            id="pokemonName"
            placeholder="Charizard, Pikachu, etc."
            onChange={(e) => setSearctText(e.target.value)}
            className="w-full background-white rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
          />
        </div>
        <h3 className="text-3xl pt-12 pb-6 text-center">Pokemon Collection</h3>
      </div>
      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-3 lg:text-left">
        {pokemonList.map((pokemon: any) => {
          return <PokemonCard key={pokemon.name} name={pokemon.name} />
        })}
      </div>
    </>
  )
}
