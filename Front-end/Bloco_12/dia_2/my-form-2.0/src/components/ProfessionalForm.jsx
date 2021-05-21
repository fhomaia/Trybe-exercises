import React from 'react'

class ProfessionalForm extends React.Component {
    render() {
        return(
          <fieldset>
            <div>
              <input type="TextArea" maxLength='1000' name='curriculo' placeholder='Resumo do Currículo' required/>
            </div>
            <div>
              <input type="TextArea" maxLength='40' name='cargo' placeholder='Cargo' onMouseEnter={this.messageResume} required/>
            </div>
            <div>
              <input type='text' maxLength='500' name='descriçãoDoCargo' placeholder='Descrição do cargo:' required/>
            </div>
        </fieldset>
        )
    }
}

export default ProfessionalForm;