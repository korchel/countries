export type Region = 'Africa' | 'Asia' | 'America' | 'Europe' | "Oceania"

type Currency = {
  name: string,
  symbol: string,
}

type Name = {
  common: string,
    official: string,
}

export type Country = {
  name: Name & {
    nativeName: Name,
  },
  tld: string[],
  currencies: {[key: string]: Currency},
  capital: string[] | undefined,
  flag: string,
  flags: {
    png: string,
    svg: string,
    alt: string,
  },
  region: Region,
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