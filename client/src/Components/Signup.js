import React, { Component } from 'react'
import axios from 'axios'

class Signup extends Component {
    constructor(){
        super()
        this.state={
            firstName:'',
            lastName:'',
            email:'',
            phone:'',
            password:''
        }
    }
    handleChangeF=(e)=>{
        this.setState({
            firstName:e.target.value,
        }, ()=>{
        })
    }
    handleChangeL=(e)=>{
        this.setState({
            lastName:e.target.value,
        }, ()=>{
        })
    }
    handleChangeE=(e)=>{
        this.setState({
            email:e.target.value,
        }, ()=>{
        })
    }
    handleChangeP=(e)=>{
        this.setState({
            phone:e.target.value,
        }, ()=>{
        })
    }
    handleChangePs=(e)=>{
        this.setState({
            password:e.target.value
        }, ()=>{
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        const  url =  `http://localhost:2010/add-user`;
        console.log(this.state)
        axios.post(url, this.state).then((response)=>{console.log(response)})
       .catch((error)=>{
       console.log(error.massege, "did not send request");
        })
   
    }
    render() {
        return (
            <div id='main'>
                <div>
                <form>
                 <div id="signUp">
                    <table>
                        <tbody>
                        <tr>
                            <td>
                                <input onChange={this.handleChangeF} id="firstName" name="firstName" type="text" value={this.state.firstName} placeholder="First Name"></input>
                            </td>
                            <td>
                                <input onChange={this.handleChangeL} id="lastName" name="lastName"  value={this.state.lastName} type="text" placeholder="Last Name"></input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input onChange={this.handleChangeE} id="email" name="email"  value={this.state.email} type="email" placeholder="Email"></input>
                            </td>
                            <td>
                                <input onChange={this.handleChangeP} id="phone" name="phone"  value={this.state.phone} type="text" placeholder="Phone"></input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input onChange={this.handleChangePs} id="password" name="password"  value={this.state.password}type="password" placeholder="create password"></input>
                            </td>
                            <td>
                                <input type="password" placeholder="confirm password"></input>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <button onClick={this.handleSubmit} id="sub" type="submit"><b>Register</b></button>
                </div>
            </form>
            
                </div>
                <div id="footer">
                       
                </div>
            </div>
        )
    }
};
export default Signup;
