import React from 'react';
import { connect } from 'react-redux';
import clientsAction from '../redux/actions/clientsAction'
import { Link } from 'react-router-dom';

class AddClients extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: '',
      email: '',
    }
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  } 
  render() {
    const { clientsAction } = this.props;
    const { name, age, email } = this.state;
    return(
      <div>
        <form>
          <label htmlFor="name">
            Nome
            <input type="text" id="name" name="name" onChange={ this.handleChange } />
          </label>
          <label htmlFor="name">
            Idade
            <input type="text" id="age" name="age" onChange={ this.handleChange } />
          </label>
          <label htmlFor="email">
            e-mail
            <input type="email" id="email" name="email" onChange={ this.handleChange } />
          </label>
            <button
              type='button'
              onClick={ () => clientsAction(name, age, email)}
            >
              Adicionar
          </button>
        </form>
        <Link to='/users'>Voltar para clientes cadastrados</Link>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  clientsAction: (name, age, email) => dispatch(clientsAction(name, age, email))
})

export default connect(null, mapDispatchToProps)(AddClients);