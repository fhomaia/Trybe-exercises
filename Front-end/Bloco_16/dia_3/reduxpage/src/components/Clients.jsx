import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class Clients extends React.Component {
  renderClients = () => {
    const { clientsData } = this.props;
    return clientsData.map((client) => {
      return(
      <div key={client.name}>
        <span>{client.name}</span>
        <span>{client.age}</span>
        <span>{client.email}</span>
      </div>
      )
    })
  }

  render() {
    const { clientsData } = this.props;
    return(
      <div>
        {clientsData.length > 1 ? this.renderClients() : "Nenhum cliente cadastrado" }
        <Link to="/add"><button>Adicionar Cliente</button></Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  clientsData: state.clients.clientsData,
});

export default connect(mapStateToProps)(Clients)