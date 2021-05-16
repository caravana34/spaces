import React, {Component} from "react";
import{
    Card,
    CardContent,
    List,
    ListItem,
    ListSubheader,
    ListItemText,
    ListItemIcon,
    TextField,
    IconButton
} from "@material-ui/core";
import ScatterPlot from "@material-ui/icons/ScatterPlot";
import Edit from "@material-ui/icons/Edit";

{/*import Button from
'@material-ui/core/Button';*/}
{/*export class  Flag extends Component{
    render(){
    return(
        <div>
            <h1>Bandera</h1>
        </div>
    )
    }
}*/}

{/*export class  Insumo extends Component{
    render(){
    return(
        <Fragment>
            <h1>Menta</h1>
            <h2>Toronjil</h2>
        </Fragment>
    )
    }
}*/}

class Bebida extends Component{
    state = {
        edit : false,
        name: this.props.name
    };
    edit = e => {
        this.setState({edit: !this.state.edit})
    };
    handleChange = e =>{
    let newState = {...this.state};
    newState.name = e.currentTarget.value;
    this.setState(newState);
    this.props.onUpdateBebida(this.props.index, newState.name);
};

  componentDidUpdate(){
      console.log ('componente actualizado');
  };

    render(){
        return(
    <Card className="card">
    <CardContent>
        <List
            Component = "nav"
            subheader={
            <ListSubheader component="div">
            {this.state.edit ? (
                <TextField
                label = "bebidas..."
                type = "text"
                margin = "normal"
                variant = "outlined"
                value= {this.state.name}
                onChange = {this.handleChange}
                />
            ):
            (this.props.name
                )}
            <IconButton size = "small" onClick = {this.edit}>
                <Edit />
                </IconButton>

           </ListSubheader>
            }
            >
            {this.props.ingredients.map((ingredient, index)=>
            (
            <ListItem button key={index}>
                <ListItemIcon>
                 <ScatterPlot/>
                </ListItemIcon>
                <ListItemText inset primary ={ingredient} />
            </ListItem>
                ))}
         </List>
    </CardContent>
       </Card>
       );
    }
}


    {/*render(){
        const { params } = this.props.match;
    return(
        <div className ="bebida">
            <h2>{params.name} </h2>
            <h2>{this.props.name} </h2>
            <h3>{this.countInfusiones()}</h3>
           <ul>
               {this.infusiones.map ((infusiones, index ) => (
               <li key={index}>{infusiones}</li>
               ))}
           </ul>
        
            <Button variant="contained" color="primary">
              Bebidas
              </Button>
        </div>*/}
 
export default Bebida;