import React, { useState, Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {Table, Button, Modal, ModalBody, ModalHeader, FormGroup, Container, ModalFooter} from 'reactstrap';

const data = [
   {id: 1, personaje: "Name", description: "Same"},
   {id: 2, personaje: "Name2", description: "Same2"},
];

const App = () => {
//class App extends Component{

   const [ code, setCode ] = useState("");

   const handleAdd = (e) => {
      setCode(e.target.value);
   }

   const handleSubmit = () => {

      // let formData = new FormData();
      // let formData1 = new URLSearchParams();
      // formData.append("code", code);

      const data = {"code": code}

      const url = "https://halcory.com/mod/react-attend/api/attend.php?PHPSESSID=915f1f3a528a70e98cbcb45a86f30b3d";

      axios.post(url, data)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
   }

      return(
         <Container>
            <FormGroup>
               <label className="mt-4">Enter a code:</label>
               <input 
                  onChange={ (e)=> handleAdd(e) }
                  className="form-control mt-2 mb-2" 
                  placeholder="Enter the code" 
                  name="code"
                  type="number"
                  value={code}
                  />
            </FormGroup>
            <Button id="checkCode" onClick={()=>{handleSubmit()}} color="primary">Check code</Button>
         </Container>
      )
}

export default App;