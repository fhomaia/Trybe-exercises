import React  from 'react';
import { Link } from 'react-router-dom'
import loginAction from '../redux/actions/loginAction';
import { connect } from 'react-redux'

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      senha: '',
    }
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  } 

  render() {
    const { loginAction } = this.props;
    const { email, senha } = this.state
    return(
      <form>
        <label htmlFor="email">
          e-mail
          <input type="email" id="email" name="email" onChange={ this.handleChange } />
        </label>
        <label htmlFor="senha">
          senha
          <input type="password" id="senha" name="senha" onChange={ this.handleChange } />
        </label>
        <Link to='/clients'>
          <button
            type='button'
            onClick={() => loginAction(email, senha)}
          >
            Entrar
          </button>
        </Link>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginAction: (email, password) => dispatch(loginAction(email, password))
});

export default connect(null, mapDispatchToProps)( Login);