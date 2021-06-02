import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { clientsExcludeAction } from '../redux/actions/clientsAction';

class Clients extends React.Component {
  constructor(){
    super();
    this.state = {
      sort: false,
    }
  }
  renderClients = () => {
    const { sort } = this.state;
    const { clientsData, clientsExcludeAction } = this.props;
    let clients = clientsData.slice(1);
    if (sort) clients = clients.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
    return clients.map((client) => {
      return(
      <div key={client.name}>
        <button type='button' onClick={() => clientsExcludeAction(client.name)}>X</button>
        <span>{client.name}</span>
        <span>{client.age}</span>
        <span>{client.email}</span>
      </div>
      )
    })
  }

  sortButton = () => {
    this.setState((prev) => ({
      sort: !prev.sort,
    }));
  }

  render() {
    const { clientsData } = this.props;
    return(
      <div>
        {clientsData.length > 1 ? this.renderClients() : "Nenhum cliente cadastrado" }
        <button type='button' onClick={ this.sortButton } disabled={clientsData.length <= 2}>Ordem Alfabética</button>
        <Link to="/add"><button>Adicionar Cliente</button></Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  clientsData: state.clients.clientsData,
});

const mapDispatchToProps = (dispatch) => ({
  clientsExcludeAction: (payload) =>  dispatch(clientsExcludeAction(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Clients)