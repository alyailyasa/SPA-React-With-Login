import React from "react";
import { useParams } from "react-router-dom";

export default function Details() {
    const { id } = useParams();
    return(
      <div className="card">
        <div className="detail-user">
          <div>
            <h1>user id { id }</h1>
          </div>            
        </div>
      </div>

    )
} 
