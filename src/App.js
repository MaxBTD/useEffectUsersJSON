import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';

function App() {
  const [json, setJson] = useState();

  async function getUserList(){
    try{
      let response = await fetch("https://jsonplaceholder.typicode.com/users");
      let responseJson = await response.json();
      setJson(responseJson);
    } catch(error){
      console.error(error);
    }
  }

  useEffect(() => {
    getUserList();
  }, [])

  return (
    <div className="App">
      {/*Object.keys(json).map(key => <div>{key}</div>)*/}
      {JSON.stringify(json)}s
    </div>
  );
}

export default App;
