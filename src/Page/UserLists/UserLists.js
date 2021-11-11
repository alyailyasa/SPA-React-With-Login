import React, { useEffect, useState } from "react";

export default function UserLists() {
  const [users, setUsers] = useState([]);
  const allUser = async () => {
    const res = await fetch("https://reqres.in/api/users/");
    const json = await res.json();
    setUsers(json.data);
  };

  useEffect(() => {
    allUser();
  }, []);
  
  return (
      
    <div className="UserLists">
      <h1 style={{ textAlign:'center', marginTop:50 }}>User Lists</h1>
      <div className="card">
        {users.length &&
          users.map((user) => {
            return (
              <div className="detail">
                <div key={user.id}>
                  <img key={user.avatar} src={user.avatar} />
                  <h3>
                    <strong>{user.first_name}</strong>
                  </h3>
                    <p>{user.email}</p> 
                </div>
                <div>
                  <button className="button">Detail</button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
