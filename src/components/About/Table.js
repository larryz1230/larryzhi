import React from "react";
import { Container, Row, Col } from "react-bootstrap";


function Table() {
    
    return (

        <Container>
      <Row>
        <Col>
          <h3>Relevant Coursework</h3>
          <table className="table">
            {/* Table content goes here */}
            <thead class="thead-dark">


    <tr>
      <th scope="col">Course #</th>
      <th scope="col">Course Name</th>
      <th scope="col">Units</th>
      <th scope="col">Grade</th>
    </tr>
  </thead>

   

  <tbody>

  <tr>
      <th scope="row">COM SCI 180</th>
      <td>Algorithms and Complexity</td>
      <td>4.0</td>
      <td>In progress</td>
    </tr>
    <tr>
      <th scope="row">COM SCI 35L</th>
      <td> Software Construction Lab</td>
      <td>4.0</td>
      <td>In progress</td>
    </tr>
    <tr>
      <th scope="row">MATH 33B</th>
      <td> Differential Equations</td>
      <td>4.0</td>
      <td>In progress</td>
    </tr>

    <tr>
      <th scope="row">MATH 61</th>
      <td>Discrete Structures</td>
      <td>4.0</td>
      <td>A</td>
    </tr>
    <tr>
      <th scope="row">COM SCI 33</th>
      <td>Computer Organization</td>
      <td>5.0</td>
      <td>A</td>
    </tr>
    <tr>
      <th scope="row">PHYSICS 1B</th>
      <td>Oscillations, Waves, Fields</td>
      <td>5.0</td>
      <td>A</td>
    </tr>
    <tr>
      <th scope="row">COM SCI 32</th>
      <td>Data Structures & Algorithms</td>
      <td>4.0</td>
      <td>A</td>
    </tr>
    
    <tr>
      <th scope="row">MATH 33A</th>
      <td>Linear Algebra</td>
      <td>4.0</td>
      <td>A</td>
    </tr>
   
    <tr>
      <th scope="row">MATH 32A & 32B</th>
      <td>Calculus of Several Variables</td>
      <td>8.0</td>
      <td>A</td>
    </tr>

    <tr>
      <th scope="row">COM SCI 31</th>
      <td>Intro to COM SCI I</td>
      <td>4.0</td>
      <td>A</td>
    </tr>
    
  </tbody>
          </table>
        </Col>
      </Row>
    </Container>



  );
}
export default Table;