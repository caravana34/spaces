import React, {Component} from "react";
import { Fab, TextField  } from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";

class NewBebida extends Component {
    //constructor (){
        //super();
    // this.addbebida = this.addbebida.bind(this)}

    newBebida = React.createRef ();

    addBebida = event => {
        console.log ("agregar platillo");
        event.preventDefault();
        //console.log (this.newBebida.current.value);
        console.log(this.newBebida.value);
        this.props.onAddBebida(this.newBebida.value);
        this.newBebida.value = "";
    };
    render () {
        return (
            <form autoComplete="off" onSubmit ={this.addBebida}>
               {/*} <input ref={this.newbebida} /> */}
                <TextField
                    label = "bebidas..."
                    type = "text"
                    margin = "normal"
                    variant = "outlined"
                    inputRef = {e => (this.newBebida = e)}
                   
                />
                <Fab 
                color ="primary"
                 size = "medium"
                className="bebida-form-icon" 
                onClick = {this.addBebida} 
                >
                    <AddIcon/>
                </Fab>
            </form>
           

        );
    }
}
export default NewBebida;