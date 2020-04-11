import React from 'react';
import $ from 'jquery';
import Table from 'react-bootstrap/Table' 
function donate(){
    return(
        <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>Donate With Crypto</th>
      <th>Address</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>BTC</td>
      <td>Coming Soon</td>
    </tr>
    <tr>
      <td>ETH</td>
      <td>Coming Soon</td>
    </tr>
    <tr>
      <td>LTC</td>
      <td>Coming Soon</td>
    </tr>
  </tbody>
</Table>
    );
}

export default donate;