import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import '../../Style.scss';

function Details() {
  const { id } = useParams();
  const isFirstLoad = useRef(true);
  const [users, setUsers] = useState([]);

  const fetchUserDetail = async () => {
    const res = await fetch(`https://reqres.in/api/users/${id}`);
    const json = await res.json();
    setUsers(json.data);
  };

  useEffect(() => {
    if (id && isFirstLoad.current) {
      fetchUserDetail();
      isFirstLoad.current = false;
    }
  }, []);

  return (
    <div className="content-id">
        <h1 style={{ textAlign:'center', marginTop:"50px" }}>Detail User</h1>
        <br/><br/>
        <div key={ users.id }>
          <img key={ users.avatar } alt={ users } src={ users.avatar } width="200px" height="200px"/>
          <br/><br/>
          <h5><strong>User ID : { users.id }</strong></h5>
          <h6>First Name : { users.first_name } </h6>
          <h6>Last Name : { users.last_name } </h6>
          <h6>Email Address : { users.email } </h6> 
          <br/>
        </div>
      <Link to="/users" >
        <button className="button" type="button">Go Back</button>
      </Link>
    </div>
  );
}

export default Details;