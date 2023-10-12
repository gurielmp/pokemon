"use client"
import Image from "next/image"
import { getPokemonType } from "@/lib/pokemonAPI"
import { useState } from "react"

export async function PokemonType() {
  const pokemonTypes = await getPokemonType()
  const [selectedType, setSelectedType] = useState("")

  console.log(selectedType)

  return (
    <>
      <div className="mt-1 flex flex-row items-center justify-center space-x-4">
        {pokemonTypes.results.map((type: any) => {
          return (
            <div
              key={type.name}
              className="flex flex-col items-center justify-center"
            >
              <Image
                alt="grass"
                width={200}
                height={200}
                className="h-10 w-10 cursor-pointer mb-3"
                src={`/types/${type.name}.png`}
                style={{ color: "transparent" }}
                onClick={() => setSelectedType(type.name)}
              />
            </div>
          )
        })}
      </div>
    </>
  )
}
