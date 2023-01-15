import {GetServerSideProps} from "next";
import {Character} from "../../../types/rickAndMorty.types";
import {useRouter} from "next/router";
import {SingleCharacterPage} from "../../../src/components/rickandmorty/SingleCharacterPage";

export const CharacterPage = ({character}: { character: Character }) => {
  const router = useRouter()
  console.log(router.query)
  return <SingleCharacterPage character={character}/>
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${context.query.id}`
  )
  const character = await res.json()
  return {
    props: {
      character
    }
  }
}

export default CharacterPage