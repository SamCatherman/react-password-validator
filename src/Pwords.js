import React, {Component} from 'react'


class Pwords extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: '',
      passwordConf: '',
      valid: true
    }
  }

  handleEmail(e){
    this.setState({
      email: e.target.value
    })
  }

  handlePassword(e){
    this.setState({
      password: e.target.value
    })
  }

  handlePasswordConf(e){
    this.setState({
      passwordConf: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault()
    this.checkValidity()
  }

  checkValidity () {
    if (this.state.password === this.state.passwordConf) {
      this.setState({valid: true})
    } else {
      this.setState({valid: false})
    }
  }

  render(){
    let validText = this.state.valid ? "Welcome" : "Incorrect Password"
    return (
      <div>
        <input onChange={(e) => this.handleEmail(e)} type="text" placeholder="email"/>
        <input onChange={(e) => this.handlePassword(e)} type="password" placeholder="password"/>
        <input onChange={(e) => this.handlePasswordConf(e)} type="password" placeholder="confirm password"/>
        <input type="submit" onClick={(e) => this.handleSubmit(e)} value="Log in" />
        <p>{validText}</p>
      </div>
    )
  }
}

export default Pwords;
