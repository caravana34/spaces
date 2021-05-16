import React, { Component } from "react";
import Header from './components/header';
import Bebida from './components/bebida';
import NewBebida from './components/newbebida';
import Bebidas from './components/bebidas';
import data from "./assets/data/bebidas.json";
//import Sabor from './components/sabor';

import './styles/App.css';


class App extends Component{
  
  state = {
    bebida : "infusiones",
    bebidas : data
  } 

  showBebidas = e => {
    e.preventDefault();
    this.props.history.push("/platillos");
  };
  updateBebida = ( index, updatedName) =>{
    let newState = {...this.state};
  newState.bebidas.bebidas[index].name = updatedName;
  this.setState(newState);


};

addBebida = (bebidaName) =>{
let newState = { ...this.state };

const newBebida = {
  id: newState.bebidas.bebidas.length,
  name:  bebidaName, 
  country : "México",
  ingredients : ["Menta", " Limón", " Kumis" ]
};
newState.bebidas.bebidas.push(newBebida);

this.setState (newState);

};

  render (){
    return (
    <div className="App">
      <Header/>
      {/*<Sabor/>*/}
       <NewBebida onAddBebida = {this.addBebida}/>
  
      {/*<Bebida name ={this.beb }/>
      yo tomo {this.beb}
      <ul>
        {this.bebs.map ( (beb, index )=>(<li key = {index} >{beb}</li>
      
        ))}
      </ul>*/}
      <Bebidas data ={this.state.bebidas} onUpdateBebida={this.updateBebida}/>
      
       
    </div>
    );
  }
}

export default App;
