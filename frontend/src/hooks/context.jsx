import React from 'react'

import axios from 'axios'

const LoggedContext = React.createContext(false);

const LoginContext = ({ children }) => {
  const [isLogged, setIsLogged] = React.useState(false)

  async function login(email, password) {
    const response = await axios.post('http://localhost:8080/user/login', { email, password })

    if (response.status == 200) {
      const { cpf, email, id, name } = response.data
      localStorage.setItem('user_id', id)
      localStorage.setItem('user_cpf', cpf)
      localStorage.setItem('user_email', email)
      localStorage.setItem('user_name', name)

      localStorage.setItem('isLogged', true)
      setIsLogged(true)
      window.location.replace("/")
    }
    else {
      alert('Dados dos usuário incorretos')
    }
  }

  return (
    <LoggedContext.Provider value={{ login, isLogged }}>
      {children}
    </LoggedContext.Provider>
  );
}

export { LoginContext, LoggedContext }
