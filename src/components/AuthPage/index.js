import React, { Component } from 'react';
import { Particles } from 'react-particles-js';

import './styles.css';
import particlesParams from '../../particles-params';
import logo from '../../assets/Logo.svg';
import iconUser from '../../assets/login/user-shape.svg';
import iconPadlock from '../../assets/login/padlock-unlock.svg';

export class AuthPage extends Component {
  state = {
    email: '',
    pass: '',
    isRegister: false
  };

  changeHandler = e => {
    const { value, name } = e.target;

    this.setState({
      [name]: value
    });
  };

  changeMode = e => {
    e.preventDefault();

    this.setState({
      isRegister: !this.state.isRegister
    });
  };

  render() {
    const { email, pass, isRegister } = this.state;

    return <div className="auth">
      <Particles className="particles" params={particlesParams} />
      <div className="wrapper">
        <img src={logo} alt="logo" className="logo" />
        <div className="block">
          <div className="field-wrapper">
            <img src={iconUser} alt="login" className="field-icon" />
            <input
              type="email"
              className="field"
              placeholder="login"
              name="email"
              value={email}
              onChange={this.changeHandler}
            />
          </div>
          <div className="field-wrapper">
            <img src={iconPadlock} alt="password" className="field-icon" />
            <input
              type="password"
              className="field"
              placeholder="password"
              name="pass"
              value={pass}
              onChange={this.changeHandler}
            />
          </div>
          <button className="btn">
            {isRegister ? 'Регистрация' : 'Войти'}
          </button>
        </div>
        <div className="block center">
          {
            isRegister ?
              <div>Уже зарегистрированы? <a href="" onClick={this.changeMode}>Войти</a></div> :
              <div>Впервые на сайте? <a href="" onClick={this.changeMode}>Регистрация</a></div>
          }
        </div>
      </div>
    </div>
  }
}

export default AuthPage;