import { useState } from "react";
import { useEffect } from "react";
 import "./style/opere.css";
export default function Opere() {
    const [users, setUsers] = useState();
  

    var options = {
        headers: {
        mode: 'no-cors'
        }
    }
    // Function to collect data
    const getApiData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/", options
      ).then((response) => response.json());
  
      setUsers(response);
    };
  
    useEffect(() => {
      getApiData();
    }, []);
  
    return (
      <div className="opere_app">
        {users &&
          users.map((user) => (
            <div className="item-container">
              Id:{user.id} <div className="title">Title:{user.title}</div>
            </div>
          ))}
      </div>
    );
  }