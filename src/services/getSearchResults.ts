import { API_HOST } from './constants'

export const getSearchResults = (searchText: string) =>
  fetch(`${API_HOST}/search?q=${searchText}`).then((res) => res.json())
