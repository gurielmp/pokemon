"use client"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

interface PokemonCardProps {
  name: string
  url: string
}

export function PokemonCard({ name, url }: PokemonCardProps) {
  const [pokemonData, setPokemonData] = useState("/types/loading.gif")
  const [pokemonType, setPokemonType] = useState("grass")
  const [pokemonSecondaryType, setPokemonSecondaryType] = useState("grass")
  useEffect(() => {
    async function getPokemonUrl() {
      const response = await fetch(url)
      const result = await response.json()
      setPokemonData(result.sprites.other["official-artwork"].front_default)
      setPokemonType(result.types[0].type.name)
      setPokemonSecondaryType(
        result.types.length > 1 ? result.types[1].type.name : ""
      )
    }
    getPokemonUrl()
  }, [url])

  const secondType =
    pokemonSecondaryType.length > 1 ? (
      <div className="flex flex-col items-center justify-center">
        <Image
          alt="grass"
          className="cursor-pointer mb-3 transition-opacity opacity-0 duration-[2s]"
          src={`/types/${pokemonSecondaryType}.png`}
          style={{ color: "transparent" }}
          width={40}
          height={40}
          onLoadingComplete={(image) => image.classList.remove("opacity-0")}
        />
      </div>
    ) : (
      ""
    )
  return (
    <Link
      href={name}
      className="m-5 flex h-fit w-[20rem] flex-col items-center justify-center rounded-2xl bg-neutral-300 bg-opacity-50 px-3 py-2 shadow-xl shadow-neutral-500 backdrop-blur-sm backdrop-filter dark:bg-neutral-500 dark:bg-opacity-50 dark:shadow-neutral-900"
      key={name + "Card"}
    >
      <h2 className={`text-2xl`}>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </h2>
      <Image
        className="transition-opacity opacity-0 duration-[2s]"
        style={{ color: "transparent" }}
        onLoadingComplete={(image) => image.classList.remove("opacity-0")}
        src={pokemonData}
        alt={name}
        width={250}
        height={250}
      />
      <div className="mt-1 flex flex-row items-center justify-center space-x-4">
        <div className="flex flex-col items-center justify-center">
          <Image
            alt="grass"
            className="cursor-pointer mb-3 transition-opacity opacity-0 duration-[2s]"
            src={`/types/${pokemonType}.png`}
            style={{ color: "transparent" }}
            width={40}
            height={40}
            onLoadingComplete={(image) => image.classList.remove("opacity-0")}
          />
        </div>
        {secondType}
      </div>
    </Link>
  )
}
