import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './App';
import './index.css';
import './mystyle.css';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { enthusiasm } from './reducers/index';
import { IStoreState } from './types/index';

import { EnthusiasmAction } from './actions/index';
import Hello from './containers/Hello';
import { Provider } from 'react-redux';

const store = createStore<IStoreState, EnthusiasmAction, any, any>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
});

ReactDOM.render(
  <div>
    <header>
      <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
              <img src="//bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
            </a>
        
            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navMenu">
              <span aria-hidden="true"/>
              <span aria-hidden="true"/>
              <span aria-hidden="true"/>
            </a>
          </div>
          <div className="navbar-menu" id="navMenu">
            <div className="navbar-start">
              <a className="navbar-item">
                Home
              </a>
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">
                  Docs
                </a>
            
                <div className="navbar-dropdown">
                  <a className="navbar-item">
                    Overview
                  </a>
                  <a className="navbar-item">
                    Elements
                  </a>
                  <a className="navbar-item">
                    Components
                  </a>
                  <hr className="navbar-divider" />
                  <div className="navbar-item">
                    Version 0.7.1
                  </div>
                </div>
              </div>
            </div>
          
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="field is-grouped">
                  <p className="control">
                    <a className="button">
                      <span className="icon">
                        <i className="fas fa-twitter" aria-hidden="true" />
                      </span>
                      <span>Tweet</span>
                    </a>
                  </p>
                  <p className="control">
                    <a className="button is-primary">
                      <span className="icon">
                        <i className="fas fa-download" aria-hidden="true" />
                      </span>
                      <span>Download</span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      
    <section className='section'>
      <div className="container is-fluid">
        <p>Δοκιμη τεστ 123 Τραλαλα</p>
        <div className="notification">
          This container is <strong>fluid</strong>: it will have a 32px gap on either side, on any
          viewport size.
        </div>
      </div>
    </section>

    <section className='section'>
      <div className='container'>
        <h1 className="title">
          Bulma
        </h1>

        <p className="subtitle">
         Δοκιμή για το BULMA! 
        </p>

        <p>
          Τεστ, δοκιμή 123 Τεστ τεστ
        </p>

        <div className="field">
          <div className="control">
            <input className="input" type="text" placeholder="Input" />
          </div>
        </div>

        <div className="field">
          <p className="control">
            <span className="select">
              <select>
                <option>Select dropdown</option>
              </select>
            </span>
          </p>
        </div>

        <div className="buttons">
          <a className="button is-primary">Primary</a>
          <a className="button is-link">Link</a>
        </div>
      </div>
    </section>
    <Provider store={store}>
      <Hello /> 
    </Provider>
  </div>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
