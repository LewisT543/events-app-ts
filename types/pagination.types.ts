import {Character, CanHavePagination} from "./rickAndMorty.types";

export interface PaginationProps {
  numItems: number;
  pageSize: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export interface PaginateInput {
  items: any[];
  pageNumber: number;
  pageSize: number;
}

export interface PaginatedPageProps {
  paginatedPosts: CanHavePagination[];
  itemsLength: number;
  currentPage: number;
  pageSize: number;
  onPageChange: (page: number) => void;
}

