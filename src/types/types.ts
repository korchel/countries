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
  capital: string[],
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