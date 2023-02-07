export type CanHavePagination = Character

export interface GetCharacterResults {
  info: Info;
  results: Character[];
}

export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: null;
}

export interface Character {
  id: number;
  name: string;
  status: Status;
  species: Species;
  type: string;
  gender: Gender;
  origin: MyLocation;
  location: MyLocation;
  image: string;
  episode: string[];
  url: string;
  created: Date;
}

export interface MyLocation {
  name: string;
  url: string;
}

export enum Gender {
  Female = 'Female',
  Male = 'Male',
  Unknown = 'Unknown',
}

export enum Species {
  Alien = 'Alien',
  Human = 'Human'
}

export enum Status {
  Placeholder = 'Placeholder',
}