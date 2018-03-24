import axios from "axios";

export const LOAD_INIT_DATA = "LOAD_INIT_DATA";

export function loadInitData() {
  const url = 'https://jsonplaceholder.typicode.com/posts/1';
  const request = axios.get(url);

  return {
    type: LOAD_INIT_DATA,
    payload: request
  };
}
