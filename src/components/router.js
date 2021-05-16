import React from "react";
import { BrowserRouter, Route, Switch}
from "react-router-dom";
import App from "./../App";
import Bebidas from "./bebidas";
import Bebida from "./bebida";
import Countries from "./countries";
import NotFound from "./notfound";

const Router = () =>(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component = {App}/>
            <Route exact path="/bebidas" component = {Bebidas}/>
            <Route path="/bebida/:name" component ={Bebida}/>
            <Route path="/countries" component = {Countries}/>
            <Route component = {NotFound}/>
        </Switch>
    </BrowserRouter>

);
export default Router;