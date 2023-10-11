"use client"

import { useState } from "react"
import { PokemonCard } from "./pokemon-card"

export function PokemonGrid() {
  const [searchText, setSearctText] = useState("")

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
          />
        </div>
        <h3 className="text-3xl pt-12 pb-6 text-center">Pokemon Collection</h3>
      </div>
      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-3 lg:text-left">
        <PokemonCard name="Pikachu" />
        <PokemonCard name="Pikachu" />
        <PokemonCard name="Pikachu" />
      </div>
    </>
  )
}
