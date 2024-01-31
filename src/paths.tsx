const apiPath = 'https://restcountries.com/v3.1';

const paths = {
  all: (): string => [apiPath, 'all'].join('/'),
  country: (name: string): string => [apiPath, 'name', name].join('/') + '?fullText=true',
  neighbors: (countryCodes: string[]): string => [apiPath, 'alpha?codes='].join('/') + countryCodes.join(','),
};

export default paths;
