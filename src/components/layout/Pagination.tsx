import {PaginateInput, PaginationProps} from "../../../types/pagination.types";

export const paginate = ({items, pageNumber, pageSize}: PaginateInput): any[] => {
  const startIndex = (pageNumber - 1) * pageSize
  return items.slice(startIndex, startIndex + pageSize)
}

export const Pagination = ({numItems, pageSize, currentPage, onPageChange}: PaginationProps) => {
  const pagesCount = Math.ceil(numItems / pageSize)
  if (pagesCount === 1) return null
  const pages = Array.from({length: pagesCount}, (_, i: number) => i + 1)

  return (
    <div>
      <ul className={'pagination'}>
        {pages.map((page: number) => (
          <li key={page} className={page === currentPage ? 'pageItemActive' : 'pageItem'}>
            <a className={'pageLink'} onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pagination