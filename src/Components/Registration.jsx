import React from 'react';

const Registration = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-3">Sign Up</h2>
      <p className="text-center">Please create an <strong>OGM</strong> account with your details</p>

      <form>
      
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="first" className="form-label">First Name:</label>
            <input type="text" id="first" name="first" className="form-control" required />
          </div>
          <div className="col-md-6">
            <label htmlFor="last" className="form-label">Last Name:</label>
            <input type="text" id="last" name="last" className="form-control" required />
          </div>
        </div>

        
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Your Email:</label>
          <input type="email" id="email" name="email" className="form-control" required />
        </div>
        <div className="input-group mb-3">
        <label htmlFor="mobile" className="form-label">Mobile Number: </label>
        <span className="input-group-text" id="basic-addon1">+00</span>
      <input type="text" class="form-control" placeholder="01010 01010" aria-label="Username" aria-describedby="basic-addon1"/>
      </div>
      

      

       
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="password" className="form-label">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              pattern="^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9])\S{8,}$"
              title="Password must contain at least one number, one alphabet, one symbol, and be at least 8 characters long"
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="repassword" className="form-label">Confirm Password:</label>
            <input
              type="password"
              id="repassword"
              name="repassword"
              className="form-control"
              required
            />
          </div>
        </div>

      
        <div className="form-check mb-3">
          <input type="checkbox" className="form-check-input" id="terms" required />
          <label className="form-check-label" htmlFor="terms">
            By clicking on sign up you agree to OGM <a href="#">Terms and Conditions</a> and <a href="#">Privacy Policy</a>.
          </label>
        </div>

        
        <div className="d-grid">
          <button type="submit" className="btn btn-success">Sign Up</button>
        </div>
      </form>
     
    </div>
  );
};

export default Registration;

