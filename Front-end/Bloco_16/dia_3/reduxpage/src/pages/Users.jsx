import React from 'react'
import { connect } from 'react-redux';
import Clients from '../components/Clients'

class Users extends React.Component {
  render(){
    const { email, password } = this.props;
    return(
      <div>
      {email || password ? <Clients /> : <div>Login não efetuado</div> }
      </div>
    );
  }
}

const mapStateToProps  = (state) => ({
    email: state.login.email,
    password: state.login.password,
})

export default connect(mapStateToProps,null)(Users);