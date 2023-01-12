import Image from "next/image";
import imageLoader from "../../../imageLoader";
import {Character} from "../../../types/rickAndMorty.types";
import Link from "next/link";

export const SingleCharacterPage = ({character}: { character: Character }) => {
  return (
    <div>
      <h1>{character.name}</h1>
      <Image
        loader={imageLoader}
        unoptimized={true}
        src={character.image}
        alt={character.name}
        width={200}
        height={200}
      />
      <p>
        <Link href={'/learn/rickAndMorty'}>Back to Rick and Morty</Link>
      </p>
    </div>
  )
}
