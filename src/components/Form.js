import React from 'react';
import TextInput from './TextInput';
import Button from './Button'
import '../styles/Form.css'

class Form extends React.Component {

    constructor(props){
        super(props);
        this.weightChange = this.weightChange.bind(this);
        this.heightChange = this.heightChange.bind(this);
        this.calcIMC = this.calcIMC.bind(this);
        this.getImc = this.getImc.bind(this);
        this.state = { imc:'', imcClass:''};
    }

    weightChange(weightValue){
        this.setState({weight : weightValue});
    }

    heightChange(heightValue){
        this.setState({height : heightValue});
    }

    calcIMC(){
        let imcValue = ( this.state.weight / this.state.height) / this.state.height;
        this.setState({ imc : imcValue });
        let imcClass = this.getImc(imcValue);
        this.setState({ imcClass : imcClass });
    }

    getImc(imc) {
        if(imc < 18.5) {
            return "Peso bajo";
        }
        if(imc >= 18.5 && imc < 24.9) {
            return "Peso Normal";
        }
        if(imc >= 25 && imc < 29.9) {
            return "Sobrepeso";
        }
        if(imc >= 30) {
            return "Obesidad";
        }
    }

    render() {
        return(
            <div>
                <div className="row">
                    <TextInput label="Altura" placeholder="Ingrese la altura en metros" onChange={this.heightChange}/>
                </div>

                <div className="row">
                    <TextInput label="Peso" placeholder="Ingrese el peso en kg" onChange={this.weightChange}/>
                </div>   

                <div className="row">
                    <Button label="Ingresar" onClick={this.calcIMC} />
                </div>   

                 <div className="row">
                        <h3>IMC = {this.state.imc}</h3>
                </div>
                <div className="row">
                    <h3>{this.state.imcClass}</h3>
                </div>  
            </div>
        )
    }
}

export default Form;