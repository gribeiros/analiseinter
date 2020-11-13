import React, {Component} from 'react'
import Axios from 'axios'
import Main from '../template/Main'

const headerProps = {
    icon:'users',
    title:'Meu Perfil',
}

const baseUrl = 'http://localhost:3001/users'

const initialState ={
    user:{name:'', email:''},
    list: []
}

export default class UserCrud extends Component{

    state ={...initialState}

    componentWillMount(){
        Axios(baseUrl).then(resp =>{
            this.setState({list: resp.data})
        })
    }


    clear(){
        this.setState({user:initialState.user})
    }

    save(){

        const user = this.state.user

        const method = user.id ?'put':'post'

        const url = user.id ? `${baseUrl}/${user.id}`: baseUrl

        Axios[method](url, user)
            .then(resp =>{
                const list = this.getUpadatedList(resp.data)
                this.setState({user:initialState.user, list})
            })
    }

    getUpadatedList(user){
        const list = this.state.list.filter(u => u.id !==user.id)
        list.unshift(user)
        return list
    }

    updateField(event){
        const user = {...this.state.user}
        user[event.target.name] = event.target.value
        this.setState({user})
    }

    renderForm(){
        return(
            <div className="form">
                <div className="rows">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <table>Nome</table>
                            <input type="text" className ="form-control" name="name" 
                            value={this.state.user.name}
                            onChange ={ e=>this.updateField(e)}
                            placeholder ="Digite seu nome..."/>
                        </div>
                    </div>

                    <div className="col-12 col-md-6" >
                        <div className="form-group">
                            <label > E-mail</label>
                            <input type="text" className="form-control"
                            name="email"
                            value={this.state.email}
                            onChange={e=>this.updateField(e)}
                            placeholder="Digite seu e-mail"/>
                        </div>
                    </div>

                    <div className="col-12 col-md-6" >
                        <div className="form-group">
                            <label >CPF</label>
                            <input type="text" className="form-control"
                            name="cpf"
                            value={this.state.email}
                            onChange={e=>this.updateField(e)}
                            placeholder="Digite seu CPF"/>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary "
                            onClick={e=> this.save(e)}>
                            Salvar
                        </button>

                        <button className="btn btn-secondary ml-2"
                        onClick={e => this.clear(e)}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )
    }
    
    load(user){
        this.setState({user})
    }
    
    remove(user){
        Axios.delete(`${baseUrl}/${user.id}`).then(resp =>{
            const list = this.state.list.filter(u =>u !==user)
            this.setState({ list })
        })
    }

    renderTabel(){
        return(
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>CPF</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }
    
    renderRows(){
        return this.state.list.map(user =>{
            return(
                <tr key ={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.cpf} </td>
                    <td>
                        <button className="btn btn-warning"
                            onClick={() => this.load(user)}>
                            <i className ="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger ml-3"
                            onClick={() => this.remove(user)}>
                            <i className ="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>   
            )
        })
        
    }
    

    render(){
        console.log(this.state.list)
        return (
        
            <Main {...headerProps }>             
                {this.renderForm()}
                {this.renderTabel()}
            </Main>
        )
    }
}