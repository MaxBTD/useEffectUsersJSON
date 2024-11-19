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
      {Object.keys(json).map(key => 
      <p>{JSON.stringify(json[key].id)}. {JSON.stringify(json[key].name).replaceAll("\"", "")} - {JSON.stringify(json[key].username)} ({JSON.stringify(json[key].email).replaceAll("\"","")})
      </p>)}
      {/*JSON.stringify(json)*/}
    </div>
  );
}

export default App;
