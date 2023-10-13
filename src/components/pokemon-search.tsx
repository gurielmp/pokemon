"use client"
import { useEffect, useState } from "react"
import { PokemonCard } from "./pokemon-card"

interface PokemonGridProps {
  pokemonList: any
}
export function PokemonSearch({ pokemonList }: PokemonGridProps) {
  const [searchText, setSearctText] = useState("")
  const [selectedOption, setSelectedOption] = useState("")
  const [pokemonElement, setPokemonElement] = useState("")

  const searchFilter = (pokemonList: any) => {
    return pokemonList.filter((pokemon: any) =>
      pokemon.name.toLowerCase().includes(searchText.toLowerCase())
    )
  }
  const filterPokemonList = searchFilter(pokemonList)

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value)
  }

  const filterByType = (pokemonList: any) => {
    if (selectedOption === "") {
      return pokemonList
    } else {
      return pokemonList.filter((pokemon: any) =>
        pokemon.url.includes(selectedOption)
      )
    }
  }

  // console.log(pokemonList)

  const filterPokemonByType = filterByType(pokemonList)

  useEffect(() => {
    async function getPokemonData() {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`
      )
      const result = await response.json()
      const pokemonUrl = result.results.map((pokemon: any) => pokemon.url)
      setPokemonElement(pokemonUrl)
    }
    getPokemonData()
  }, [])
  // console.log(pokemonElement)

  useEffect(() => {}, [pokemonElement])

  return (
    <>
      <div>
        <h3 className="text-2xl py-6 text-center">Find Your Pokemon Here</h3>
        <div className="grid w-full max-w-sm itmes-center gap-1.5">
          <div>
            <select
              className="bg-slate-200 rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-300 focus:outline-none focus:ring-indigo-500"
              value={selectedOption}
              onChange={handleOptionChange}
            >
              <option value="">All Types</option>
              <option value="normal">Normal</option>
              <option value="fighting">Fighting</option>
              <option value="flying">Flying</option>
              <option value="poison">Poison</option>
              <option value="ground">Ground</option>
              <option value="rock">Rock</option>
              <option value="bug">Bug</option>
              <option value="ghost">Ghost</option>
              <option value="steel">Steel</option>
              <option value="fire">Fire</option>
              <option value="water">Water</option>
              <option value="grass">Grass</option>
              <option value="electric">Electric</option>
              <option value="psychic">Psychic</option>
              <option value="ice">Ice</option>
              <option value="dragon">Dragon</option>
              <option value="dark">Dark</option>
              <option value="fairy">Fairy</option>
            </select>
          </div>
          <label htmlFor="search">Pokemon Name</label>
          <input
            type="text"
            value={searchText}
            id="pokemonName"
            placeholder="Pikachu, Bulbasaur etc."
            onChange={(e) => setSearctText(e.target.value)}
            className="w-full bg-slate-200 rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-300 focus:outline-none focus:ring-indigo-500"
          />
        </div>
      </div>
      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-3 lg:text-left">
        {filterPokemonList.map((pokemon: any) => {
          return (
            <PokemonCard
              key={pokemon.name}
              name={pokemon.name}
              url={pokemon.url}
            />
          )
        })}
      </div>
    </>
  )
}
