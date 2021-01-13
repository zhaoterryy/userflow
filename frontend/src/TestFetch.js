import React from 'react';
const testFetch = () =>{
constructor(props) {
  super(props);
  this.state = { apiResponse: "" };
}

callAPI() {
  fetch("http://localhost:8080/users")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }));
}

componentWillMount() {
  this.callAPI();
}


return(
  <div> 
  <p></p>

  </div>
  

)

};
export default testFetch;