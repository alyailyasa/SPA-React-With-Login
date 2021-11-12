import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, useParams } from "react-router-dom";

function Details() {
  const { id } = useParams();
  return (
    <div>
      <h1>ID {id}</h1>
    </div>
  )            
}

ReactDOM.render(
  <Router>
    <div>
      <Switch>
        <Route path="/users/:id" component={Details} />
      </Switch>
    </div>
  </Router>,
  document.getElementById('root')
)
export default Details;