require('styles/bootstrap.css');
require('styles/components/App.scss');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');

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
          <section className="table-controls">
            <button aria-label="Add player to list">Add Player</button>
          </section>
          <table className="table" aria-label="Table of users">
            <thead>
              <tr>
                <th className="th1" scope="col"></th>
                <th scope="col">First Name</th>
                <th scope="col">Surname</th>
                <th scope="col">Sex</th>
                <th scope="col">Tier</th>
                <th scope="col">Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Fred</td>
                <td>Redwood</td>
                <td className="td-sex td-sex--male"><img src="images/icon_male.svg" alt="Male" /></td>
                <td className="td-tier td-tier--gold"><img src="images/tier_gold.svg" alt="Gold" /></td>
                <td><a href="mailto:fred@gmail.com">fred@gmail.com</a></td>
              </tr>
            </tbody>
          </table>
        </main>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
