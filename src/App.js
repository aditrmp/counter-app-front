// import axios from 'axios';
import React, { useState, Component } from 'react';
import './App.css';
import Axios from "axios";
//kelas 1 perkenalan JSX
// function App() {
//   const name = "RAMA";
//   const email = "adit@ramp.com";

//   const hname = <h1> {name}</h1>;
//   const hemail = <h2> {email}</h2>;

//   const user = (
//     <div>
//       {hname}
//       {hemail}
//     </div>
//   );
//   return (
//     <div className="App">
//       {user}
//       {user}
//       {user}
//     </div>
//   );
// }

// class 1
// function App() {

//   return (
//     <div className="App">
//       <User name="Name to props " email="email to props"/>
//     </div>
//   );
// }

// //Kalo returnnya variable, ini namanya function javascritp doang
// const GetName = () => {
//   return "NAMA RAMA";
// }

// //component tuh return baluenya HTML. jadi buat bikin component untuk UInya
// const GetNameComponent = () => {
//   return <h1>NAMA RAMA COMPONENT</h1>
// }

// //component with props
// //props tuh mirip sama param tp ga stateful. isinya bisa apa aja.
// //buat masukin props, masukin param di yg panggil component
// const User = (props) => {
//   const name = "RAMA";
//   const email = "adit@ramp.com";

//   const hname = <h1> name</h1>;
//   const hemail = <h2> email</h2>;

//   const user = (
//     <div>
//       {hname}
//       {hemail}
//     </div>
//   );
//   return (
//     //kalo pake panggil variable biasa
//   //   <div>
//   //   {hname}
//   //   {hemail}
//   // </div>

//   //kalo pake props
//     <div>
//       <h1>{props.name}</h1>
//       <h2>{props.email}</h2>
//     </div>
//   );
// }

// const axios = require('axios');
// const querystring = require('querystring');
var bodyFormData = new FormData();
const url = 'http://localhost:8080/count/bytxt';

var req = {
  fileStr: "S3VsaXRpa2EsIGFsaW5hLCBtYXJpYWRpLCBNYXJpYSwgbWFyaWFuaSBsaWFAK18oXykqXygoKV8qbWVsaW5hIHJvc2lkYSBtZWkNCm1pYWxpc2ENCm1hcmtvbmFoDQphbGRpc2ENCmFuaXRhDQpyYWtoYQ0KcmFtYQ0KZWxpbw0KbWFzZ2lv",
  type: "xl"
};

var reqJson = JSON.stringify({
  fileStr: "S3VsaXRpa2EsIGFsaW5hLCBtYXJpYWRpLCBNYXJpYSwgbWFyaWFuaSBsaWFAK18oXykqXygoKV8qbWVsaW5hIHJvc2lkYSBtZWkNCm1pYWxpc2ENCm1hcmtvbmFoDQphbGRpc2ENCmFuaXRhDQpyYWtoYQ0KcmFtYQ0KZWxpbw0KbWFzZ2lv",
  type: "xl"
});


const hitBE = () => {
  // bodyFormData.append('S3VsaXRpa2EsIGFsaW5hLCBtYXJpYWRpLCBNYXJpYSwgbWFyaWFuaSBsaWFAK18oXykqXygoKV8qbWVsaW5hIHJvc2lkYSBtZWkNCm1pYWxpc2ENCm1hcmtvbmFoDQphbGRpc2ENCmFuaXRhDQpyYWtoYQ0KcmFtYQ0KZWxpbw0KbWFzZ2lv', 
  // 'xl');
  // Axios({
  //   method: 'post',
  //   url: 'http://localhost:8080/count/bytxt',
  //   data: req
  // })
  //   .then(function (response) {
  //     console.log(response);
  //   })
  //   .catch(function (response) {
  //     console.log(response)
  //   });

  Axios.post('http://localhost:8080/count/bytxt', { reqJson }, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:3000'
    }
  })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

// const res = await axios.post('http://localhost:8080/count/bytxt', reqJson, {
//   headers: {
//     // Overwrite Axios's automatically set Content-Type
//     'Content-Type': 'application/json'
//   }
// });


function App() {
  const data = { fileStr: "", type: "" }
  const [inputData, setInputData] = useState(data);
  const [countTotals, setCountTotal] = useState(0);

  const [base64Str, setBase64Str] = useState();

  const [nameLists, setNameList] = useState([]);
  const handleData = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {

    e.preventDefault();
    inputData.fileStr = base64Str;
    Axios.post(url, inputData, {
      // Axios.post(url, base64Str, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    })
      .then((response) => {
        setCountTotal(response.data.countTotal);
        setNameList(response.data.nameList);
        var listName = response.data.nameList;
        console.log("name list: " + listName);


        console.log(response)
      })
  }
  
  // var state = {
  //   // Initially, no file is selected
  //   selectedFile: null,
  // };

  // // On file select (from the pop up)
  // var onFileChange = (event) => {
  //   // Update the state
  //   this.setState({
  //     selectedFile: event.target.files[0],
  //   });
  // };

  // // On file upload (click the upload button)
  // var onFileUpload = () => {
  //   // Create an object of formData
  //   const formData = new FormData();

  //   // Update the formData object
  //   formData.append(
  //     "myFile",
  //     this.state.selectedFile,
  //     this.state.selectedFile.name
  //   );

  //   // Details of the uploaded file
  //   console.log(this.state.selectedFile);

  //   // Request made to the backend api
  //   // Send formData object
  //   Axios.post("api/uploadfile", formData);
  // };

  // // File content to be displayed after
  // // file upload is complete
  // var fileData = () => {
  //   if (this.state.selectedFile) {
  //     return (
  //       <div>
  //         <h2>File Details:</h2>
  //         <p>
  //           File Name:{" "}
  //           {this.state.selectedFile.name}
  //         </p>

  //         <p>
  //           File Type:{" "}
  //           {this.state.selectedFile.type}
  //         </p>

  //         <p>
  //           Last Modified:{" "}
  //           {this.state.selectedFile.lastModifiedDate.toDateString()}
  //         </p>
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div>
  //         <br />
  //         <h4>
  //           Choose before Pressing the Upload
  //           button
  //         </h4>
  //       </div>
  //     );
  //   }
  // };

  // const [file, setFile] = useState()

  // function handleChange(event) {
  //   setFile(event.target.files[0]);
  //   console.log(event);
  // }

  

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    // console.log(file)
    const base64 = await convertToBase64(file);
    var baseCode = base64.split(',')[1];
    setBase64Str(baseCode);
    console.log("base64Str file : "+baseCode);
  };

  const convertToBase64 = (file) =>{
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = (() => {
        resolve(fileReader.result);
      });

      fileReader.onerror = ((error) => {
        reject(error);
      });

    })
  }


  return (
    // <div className="App">
    <div>
      {/* <lable>Input Base64: </lable>
      <input type='text' name="fileStr" value={inputData.fileStr} onChange={handleData} />  */}
      <lable>Upload file: </lable> <br></br>
      <input type='file'  onChange={(e) => {uploadImage(e)}}/> <br></br>
      <button onClick={handleSubmit}>Submit</button><br></br>
      <br></br>
      <br></br>
      <label>Total Name: </label>
      <label>{countTotals}</label><br></br>
      <label>Name List: </label>
      <table border="1">
        {nameLists.map(name =>
          <tr>
            <td>
              {name}
            </td>
          </tr>
        )}
      </table>
      {/* <div>
        <input
          type="file"
          onChange={this.onFileChange}
        />
        <button onClick={this.onFileUpload}>
          Upload!
        </button>
      </div>
      {this.fileData()} */}
    </div>
  );
}

export default App;
