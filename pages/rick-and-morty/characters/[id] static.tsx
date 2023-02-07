import {Character, GetCharacterResults} from "../../../types/rickAndMorty.types";
import {SingleCharacterPage} from "../../../src/components/rickandmorty/SingleCharacterPage";

export const CharacterPage = ({character}: { character: Character }) => {
  return <SingleCharacterPage character={character}/>
}

export const getStaticPaths = async () => {
  const res = await fetch("https://rickandmortyapi.com/api/character")
  const {results}: GetCharacterResults = await res.json()
  return {
    paths: results.map((character) => {
      return {params: {id: String(character.id)}}
    }),
    fallback: false
  }
}

export const getStaticProps = async ({params}: { params: { id: String } }) => {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${params.id}`
  )
  const character = await res.json()
  return {
    props: {
      character
    }
  }
}

export default CharacterPage