import React from 'react'
import axios from 'axios'

const response = axios.get('http://localhost:8080/results/' + localStorage.getItem('user_id') + '/list/mmm')
let data = response.then((r) => r.data)

console.table(data)

const Results = () => {
  return (
    <ul>
      <li>{data[0].id}</li>
    </ul>
  );
}

export default Results
