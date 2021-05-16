import React, {Component} from "react";
import {GridList} from "@material-ui/core";



import Bebida from "./bebida.js";

export class Bebidas extends Component {

   goBack = e => {
        e.preventDefault();
        this.props.history.push("/");
      };
      updateBebida =(index, updatedName)=>{
        this.props.onUpdateBebida(index, updatedName);

      };
    render(){
        return (
            <div>
               
              {/*   {data.bebidas.map(bebida =>(
                    <div>
                        <div>{bebida.name}</div>
                        <div>{bebida.ingredients}</div>
                        <br/>
                    </div>
                ))}*/}
                {/*<List 
                    componet ="nav"
                    subheader={<ListSubheader
                    component="div">Infusiones</ListSubheader>}
                 >
                    {data.bebidas.map((bebida, index) =>(
                        <ListItem button key={index}>
                            <ListItemIcon>
                                <Restaurant/>
                            </ListItemIcon>
                            <ListItemText inset primary = {bebida.name}/>
                        </ListItem>
                    ))}
                    </List>*/}
                    <GridList>
                    {this.props.data.bebidas.map ((bebida, index) =>(
                        <Bebida key={index} 
                        name={bebida.name} 
                        ingredients = {bebida.ingredients} 
                        index = {index}
                        onUpdateBebida = {this.updateBebida}
                        />
                        ))}
                        </GridList>

            </div>
        );
    }
}
export default Bebidas; 