import axios from 'axios';

export function fetchUsers() {
  return axios('https://jsonplaceholder.typicode.com/uses');
}
