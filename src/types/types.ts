export type Region = 'Africa' | 'Asia' | 'America' | 'Europe' | "Oceania"

type Currency = {
  name: string,
  symbol: string,
}

type Name = {
  common: string,
    official: string,
    nativeName: {
      [key: string]: {
        official: string,
        common: string,
      }
    }
}

export type Country = {
  name: Name,
  tld: string[],
  currencies: {[key: string]: Currency},
  capital: string[],
  flag: string,
  flags: {
    png: string,
    svg: string,
    alt: string,
  },
  region: Region,
  subRegion: string,
  population: number,
  borders: string[],
  languages: {[key: string]: string},
}

export interface ICountryCardProps {
  name: string,
  population: number,
  region: string,
  capital: string[] | undefined,
  flag: {
    svg: string | undefined,
    png: string | undefined,
    alt: string | undefined,
  },
}

export interface ICountryCardProps {
  name: string,
  population: number,
  region: string,
  capital: string[] | undefined,
  flag: {
    svg: string | undefined,
    png: string | undefined,
    alt: string | undefined,
  },
}