import {CanHavePagination, Character} from "../../lib/rickAndMorty/rickAndMorty.types";
import Link from "next/link";
import Image from "next/image";
import imageLoader from "../../../imageLoader";

export const characterToJsx = (character: Character): JSX.Element => {
  return (
    <div key={character.id} className={'character-list-item'}>
      <Link href={`/learn/characters/${character.id}`}>
        <h2>{character.name}</h2>
        <div>
          <Image
            loader={imageLoader}
            unoptimized={true}
            src={character.image}
            alt={character.name}
            width={200}
            height={200}
          />
        </div>
      </Link>
    </div>
  )
}

export const PaginatedCharacter = (props: { characters: CanHavePagination[], callbackfn: (character: Character) => JSX.Element }) => {
  return <>{props.characters.map(props.callbackfn)}</>
}

export default PaginatedCharacter