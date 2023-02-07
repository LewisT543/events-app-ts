import {GetStaticProps, NextPage} from "next";
import {Character, GetCharacterResults} from "../../src/lib/rickAndMorty/rickAndMorty.types";
import {useState} from "react";
import {paginate} from "../../src/components/layout/Pagination";
import {PaginatedCharactersPage} from "../../src/components/rickandmorty/PaginatedCharactersPage";
import {PropsAnd} from "../../src/lib/charts/utils.types";

interface RickAndMortyProps {
  characters: Character[]
}

export const RickAndMorty: NextPage<RickAndMortyProps> = (props: RickAndMortyProps) => {
  const {characters} = props
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 5

  const onPageChange = (page: number) => {
    setCurrentPage(page)
  }

  const paginateInput = {items: characters, pageNumber: currentPage, pageSize}
  const paginatedPosts = paginate(paginateInput)

  return (
    <PaginatedCharactersPage
      paginatedPosts={paginatedPosts}
      itemsLength={characters.length}
      currentPage={currentPage}
      pageSize={pageSize}
      onPageChange={onPageChange}
    />
  )
};

export const getStaticProps: GetStaticProps = async (): Promise<PropsAnd<RickAndMortyProps>> => {
  const res = await fetch("https://rickandmortyapi.com/api/character")
  const {results}: GetCharacterResults = await res.json()

  return {
    props: {
      characters: results
    }
  }
}

export default RickAndMorty