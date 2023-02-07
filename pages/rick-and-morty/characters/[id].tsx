import {GetServerSideProps, NextPage} from "next";
import {Character} from "../../../src/lib/rickAndMorty/rickAndMorty.types";
import {useRouter} from "next/router";
import {SingleCharacterPage} from "../../../src/components/rickandmorty/SingleCharacterPage";

interface RAndMSingleCharPageProps {
  character: Character
}

export const CharacterPage: NextPage<RAndMSingleCharPageProps> = (props: RAndMSingleCharPageProps) => {
  const {character} = props
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