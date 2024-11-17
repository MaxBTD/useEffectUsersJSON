import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';

function App() {
  const [json, setJson] = useState();

  async function getUserList(){
    try{
      let response = await fetch("https://jsonplaceholder.typicode.com/users");
      let responseJson = await JSON.stringify(response.json());
      return responseJson;
    } catch(error){
      console.error(error);
      return "d";
    }
  }

  useEffect(() => {
    setJson(getUserList());
  })

  return (
    <div className="App">
      {Object.keys(json).map(key => <div>{key}</div>)}
    </div>
  );
}

export default App;
