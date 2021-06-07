import React from 'react';
import { connect } from 'react-redux';
import  clientsAddAction  from '../redux/actions/clientsAction';
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

  handleClick = () => {
    const { clientsAddAction } = this.props;
    const { name, age, email } = this.state;
    clientsAddAction(name, age, email);
    this.setState({
      name: '',
      age: '',
      email: '',
    });
  }

  render() {
    const { name, age, email } = this.state;
    return(
      <div>
        <form>
          <label htmlFor="name">
            Nome
            <input type="text" id="name" name="name" onChange={ this.handleChange } value={name} />
          </label>
          <label htmlFor="name">
            Idade
            <input type="text" id="age" name="age" onChange={ this.handleChange } value={age} />
          </label>
          <label htmlFor="email">
            e-mail
            <input type="email" id="email" name="email" onChange={ this.handleChange } value={email}/>
          </label>
            <button
              type='button'
              onClick={ this.handleClick }
            >
              Adicionar
          </button>
        </form>
        <Link to='/clients'>Voltar para clientes cadastrados</Link>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  clientsAddAction: (name, age, email) => dispatch(clientsAddAction(name, age, email))
})

export default connect(null, mapDispatchToProps)(AddClients);