require('styles/bootstrap.css');
require('styles/components/App.scss');

import React from 'react';

import TableControlsComponent from '../components/components/TableControlsComponent';
import TableComponent from '../components/components/TableComponent';
import AddUserDialog from '../components/components/AddUserComponent';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="application">
        <header className="header">
          <a className="logo" href="https://www.vizexplorer.com/" title="VizExplorer website">
            <img src="images/viz-logo.svg" onerror="this.onerror=null; this.src='images/viz-logo.png'" alt="Viz Explorer logo" />
          </a>
          <div className="title">DataGrid Assignment</div>
        </header>

        <main className="main-content">
          <TableControlsComponent />
          <TableComponent />
          <AddUserDialog />
        </main>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
