import React from 'react'

import axios from 'axios'

const LoggedContext = React.createContext(false);

const LoginContext = ({ children }) => {
  const [isLogged, setIsLogged] = React.useState(false)

  async function login(email, password) {
    const response = await axios.post('http://localhost:8080/user/login', { email, password })
    console.log(response.status)
    if (response.status === 200) {
      localStorage.setItem('isLogged', true)
      setIsLogged(true)
      window.location.replace("/")
    }
    else {
      alert('Dados dos usuário incorretos')
    }
  }

  return (
    <LoggedContext.Provider value={{login, isLogged }}>
      {children}
    </LoggedContext.Provider>
  );
}

export { LoginContext, LoggedContext }
