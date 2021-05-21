import React from 'react'

class PersonalForm extends React.Component{



  checkcity({target}) {
    if(!isNaN(target.value[0])) {
      target.value = ''
    }
  }

  states(){
    const statesBr = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"]
    return statesBr.map((state) => {
     return <option value={state} key={state} name='estado'>{state}</option>
    })
  }

  messageResume () {
    alert ('Preencha com cuidado esta informação.')
  }

  render(){
    const {changeHandler, state} = this.props

    return(
        <fieldset>
          <div>
          <input type='text' placeholder='Nome' name='nome' value={state.nome} maxLength='30' onChange={changeHandler} required></input>
          </div>
          <div>
          <input type='text' placeholder='Email' name='email' maxLength='50' required />
          </div>
          <div>
          <input type='text' placeholder='CPF' name='cpf' maxLength='11' required />
          </div>
          <div>
          <input type='text' placeholder='Endereço' name='endereço'  maxLength='200' onChange={changeHandler} required />
          </div>
          <div>
          <input type='text' placeholder='Cidade' name='cidade' maxLength='28' onBlur={this.checkcity} required/>
          </div>
          <div>
          <select>
            {this.states()}
          </select>
          </div>
          <div>
          <label htmlFor="casa">Casa</label>
          <input type='radio' name='residência' id='casa' defaultChecked></input>
          <label htmlFor="apt">Apartamento</label>
          <input type='radio' name='residência' id='apt'></input>
          </div>
        </fieldset>
    )
  } 
}

export default PersonalForm;