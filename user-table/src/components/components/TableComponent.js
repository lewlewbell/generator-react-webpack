'use strict';

import React from 'react';

require('styles/components/Table.scss');

// Import table data
const users = require('json-loader!../../data/users.json');

const userTotal = Object.keys(users).length;

for (var count = 0; count <= userTotal; count++) {
  console.log('User is: ', users[count]);
}

class TableComponent extends React.Component {
  render() {
    return (
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
    );
  }
}

TableComponent.displayName = 'ComponentsTableComponent';

// Uncomment properties you need
// TableComponent.propTypes = {};
// TableComponent.defaultProps = {};

export default TableComponent;
