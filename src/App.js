import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {Table, Button, Modal, ModalBody, ModalHeader, FormGroup, Container, ModalFooter} from 'reactstrap';

const data = [
   {id: 1, personaje: "Name", description: "Same"},
   {id: 2, personaje: "Name2", description: "Same2"},
];

class App extends Component{

   state = {
      code: ""
   };

   handleAdd = async e => {
      await this.setState({
         text: e.target.value
      })
   }

   handleSubmit = e => {
      e.preventDefault();
      console.log(this.state.text);

      let formData = new FormData();

      formData.append("code", this.state.code);
      const url = "http://159.65.219.167/mod/react-attend/api/attend.php";

      axios.post(url, formData)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
   }

   render(){
      return(
      <>
      <Container>
      <FormGroup>
      <label>Enter a code:</label>
      <input 
         onChange={this.handleAdd}
         className="form-control mt-2 mb-2" 
         placeholder="Enter the code" 
         name="code"
         type="number" 
         />
      </FormGroup>
      <Button id="checkCode" onClick={this.handleSubmit} color="primary">Check code</Button>
      </Container>
      </>)
   }
}

export default App;