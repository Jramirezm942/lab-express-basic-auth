import React, { Component } from 'react'
import {ingreso} from "../../services/colabingWs";

export default class Login extends Component {
        state = {
              data:{}
        }
                    //esta funcion es para escuchar lo que el usuaio teclea en el componente Login
                    handleChange = (event)=>{
                                    // {key:value}
                            const { value, name} = event.target;
                                    let { data } = this.state
                                    data[name] = value
                                    this.setState({ data })
                    }
                    //esta funcion envia los datos a la base de datos
                    onSubmit = (event) => {
                      event.preventDefault()
                      console.log("voy  enviar datos")
                      ingreso(this.state.data).then((response)=>{
                            this.setState({data:{}})
                            console.log("felicidades",response)
    // aqui va algo de dylan
                            localStorage.setItem( "user",JSON.stringify( response.data.colaborador ) )
                            //setearemos el usuario hasta el app D:!!
                            //destoructurando
                            // this.context.setUser(response.data.user)
                            this.props.history.push("/home")
    // aqui va algo de dylan
                      }).catch((error)=>{
                              console.log("hay un error",error.response)
                      })
                    }
        render(){
                // aqui podemos declarar const var & let
                console.log("la data",this.state.data);
                const {handleChange, onSubmit} = this;
                const {data} = this.state;
            return(
    <div>
             <div className="uk-position-relative">
                <img src="https://i.picsum.photos/id/3/5616/3744.jpg?hmac=QSuBxtSpEv3Qm3iStn2b_Ikzj2EVD0jzn99m1n6JD9I" alt=""/>
                <div className="uk-position-center">
                    <div className="uk-section uk-section-muted uk-flex uk-flex-middle uk-animation-fade" uk-height-viewport>
                        <div className="uk-width-1-1">
                            <div className="uk-container">
                                <div className="uk-grid-margin uk-grid uk-grid-stack" uk-grid>
                                    <div className="uk-width-1-1@m">
                                        <div className="uk-margin uk-width-large uk-margin-auto uk-card uk-card-default uk-card-body uk-box-shadow-large">
                                            <h2 className="uk-card-title uk-text-center">¡Bienvenido a Manager Tracker!</h2>
                                            <form
                                            onSubmit={onSubmit}
                                            >
                                                <div className="uk-margin">
                                                    <div className="uk-inline uk-width-1-1">
                                                        <span className="uk-form-icon" uk-icon="icon: mail"></span>
                                                        <input className="uk-input uk-form-large"
                                                            type="email"
                                                            name="email"
                                                            onChange={handleChange}
                                                            required
                                                            value = {data["email"] ? data["email"]:""}
                                                            placeholder="Correo Electrónico"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="uk-margin">
                                                    <div className="uk-inline uk-width-1-1">
                                                        <span className="uk-form-icon" uk-icon="icon: lock"></span>
                                                        <input className="uk-input uk-form-large"
                                                            type="password"
                                                            required
                                                            name="password"
                                                            onChange={handleChange}
                                                            value = {data["password"] ? data["password"]:""}
                                                            placeholder=" Contraseña"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="uk-margin">
                                                    <button className="uk-button uk-button-primary uk-button-large uk-width-1-1">Login</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
            );
        }
    }