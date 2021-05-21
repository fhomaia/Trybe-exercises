import React from 'react';
import ProfessionalForm from './ProfessionalForm'
import PersonalForm from './PersonalForm'

const INITIAL_STATE = {
    nome: '',
    email: '',
    cpf: '',
    endereço: '',
    cidade: '',
    estado: '',
    residência: '',
    resume: '',
    cargo: '',
    descriçãoDoCargo: '',
}

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = INITIAL_STATE;
    }
    
    removeSpecialCharacters(adress){
      adress.replace(/[^a-zA-Z0-9 ]/g, "")
    };
    
    updateState(name, value){
        this.setState(() => ({
            [name]: value,
        }))
    };

    changeHandler = event => {
        console.log(event.target)
        let { name, value } = event.target;
        if (name === 'nome') value = value.toUpperCase();
        if (name === 'endereço') this.removeSpecialCharacters(value);
    
        this.updateState(name, value);
    };

    printButton() {
        <div>{ this.state }</div>
    }


    render() {
        return(
            <div>
            <form>
                <PersonalForm changeHandler={ this.changeHandler } state={this.state} />
                <ProfessionalForm />
            </form>
            <input type='button' onClick={this.printButton} />
            </div>
        )
    }
}

export default Form;