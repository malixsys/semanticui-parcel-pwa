import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import logo from './logo.svg';
import './index.css';

const Layout = ({ children }) => (
  <div>
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item as="a" header>
          <Image
            size="mini"
            className="App-Logo" src={logo} alt="React Logo"
            style={{ marginRight: '1.5em' }}
          />

          SemanticUI Parcel Example
        </Menu.Item>
        <Menu.Item as="a">Home</Menu.Item>

        <Dropdown item simple text="Dropdown">
          <Dropdown.Menu>
            <Dropdown.Item>List Item</Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Header>Header Item</Dropdown.Header>
            <Dropdown.Item>
              <i className="dropdown icon" />
              <span className="text">Submenu</span>
              <Dropdown.Menu>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Menu>

    <Container text style={{ paddingTop: '7em' }}>
      {children}
    </Container>
  </div>
);

const App = () => (
  <Layout>
    <div className="App">
      <img className="App-Logo" src={logo} alt="React Logo" />
      <h1 className="App-Title">Hello Parcel ❤️ SemanticUI</h1>
    </div>
  </Layout>
);

ReactDOM.render(<App />, document.getElementById('root'));

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
