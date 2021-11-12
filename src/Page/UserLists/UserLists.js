import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function UserLists() {
  const [ users, setUsers ] = useState([]);
  const allUser = async () => {
    const res = await fetch("https://reqres.in/api/users");
    const json = await res.json();
    setUsers(json.data);
  };

  useEffect(() => {
    allUser();
  }, []);
  
  return (
    <div className="content">
      <h1 style={{ textAlign:'center', marginTop:50, color:'#4accf3' }}>User Lists</h1>
        {users.length &&
          users.map((user) => {
            return (
                <div className="card">
                  <div className="detail-user">
                    <div key={ user.id }>
                      <img key={ user.avatar } alt={ user } src={ user.avatar }/>
                      <h3>
                        <strong>{ user.first_name }</strong>
                      </h3>
                        <p>{ user.email }</p> 
                    </div>
                    <Link to="/users/{id}" >
                      <button className="button" type="button">Detail</button>
                    </Link>
                  </div>
                </div>
            );
          })}
    </div>
  );
}
