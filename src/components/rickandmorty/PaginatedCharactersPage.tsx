import Pagination from "../layout/Pagination";
import {PaginatedPageProps} from "../../lib/pagination.types";
import {characterToJsx, PaginatedCharacter} from "./PaginatedCharacter";

export const PaginatedCharactersPage = (props: PaginatedPageProps) => {
  return (
    <div>
      <PaginatedCharacter
        characters={props.paginatedPosts}
        callbackfn={characterToJsx}
      />
      <Pagination
        numItems={props.itemsLength}
        currentPage={props.currentPage}
        pageSize={props.pageSize}
        onPageChange={props.onPageChange}
      />
    </div>
  )
}