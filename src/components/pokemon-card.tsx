import Link from "next/link"

interface PokemonCardProps {
  name: string
}
export function PokemonCard({ name }: PokemonCardProps) {
  return (
    <Link
      href={name}
      className="group rounded-lg border border-transparent px-5 py-4 m-3 border-gray-400 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      key={name + "Card"}
    >
      <h2 className={`text-2xl font-semibold`}>{name}</h2>
    </Link>
  )
}
