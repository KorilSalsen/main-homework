import React, { Component } from 'react';

import './styles.css';
import Logo from '../Logo';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="container">
          <div className="copyright">
            Сделано с любовью и старанием
            <br />
            на курсе «React.js» в <a
            className="link"
            href="//loftschool.com"
            target={'_blank'}>
            LoftSchool</a>.
            <br />
            Автор работы: <b>Кистанов Дмитрий</b>
          </div>
          <div className="menu">
            <a href="/" className="menu-link">Лента</a>
            <a href="/" className="menu-link">Профиль</a>
            <a href="/" className="menu-link">Торги</a>
            <a href="/" className="menu-link">Главная</a>
          </div>
          <Logo white />
        </div>
      </div>
    );
  }
}