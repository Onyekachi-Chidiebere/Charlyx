import React from 'react'
class Login extends React.Component {
    render() {
        return (
            <div id='main'>
                <div>
                <form>
                <div id='input'>
                    <h1>Log In to Charlyx Group</h1>
                    <input name="username" type="Name" placeholder="Name"></input><br/>
                    <input name="password1" id="password1"type="Password" placeholder="Password"></input><br/>
                    <button id="button" type="submit"><b>Log In</b></button>
                    <span><i>Don't have an account yet? <button id="sgUp"><b><a href='./'>Register</a></b></button></i></span>
                </div>
            </form>
            
                </div>
                <div id="footer">
                       
                       </div>
            </div>
        )
    }
}
export default Login;