import Pagination from "../layout/pagination";
import {PaginatedPageProps} from "../../../types/utils.types";
import {characterToJsx, PaginatedCharacter} from "./paginated-character";

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