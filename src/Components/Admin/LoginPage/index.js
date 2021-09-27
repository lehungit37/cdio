import React from "react";

const LoginAdmin = () => {
  return (
    <div className="login__admin">
      <div className="container">
        <h4 className="logo"><span>XOSS</span> Admin</h4>
        <form>
          <div class="form-group">
            <label htmlFor="exampleInputEmail1">Name Login</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter name login"
            />
          </div>
          <div class="form-group">
            <label htmlFor="exampleInputEmail1">Password Login</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter password login"
            />
          </div>
          <button className ="btn btn-primary" >Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginAdmin;
