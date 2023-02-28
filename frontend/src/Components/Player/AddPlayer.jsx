import axios from "axios";
import React, { useRef } from "react";

const AddPlayer = () => {
  const firstName = useRef(null);
  const lastName = useRef(null);
  const phone = useRef(null);
  const email = useRef(null);
  const submitPlayer = (e) => {
    e.preventDefault();
    console.log(firstName.current.value);
    axios
      .post("http://localhost:4000/players", {
        firstName: firstName.current.value,
        lastName: lastName.current.value,
        email: email.current.value,
        phone: phone.current.value,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="row">
      <form className="col s12" onSubmit={(e) => submitPlayer(e)}>
        <div className="row">
          <div className="input-field col s6">
            <input
              placeholder="First Name"
              id="firstName"
              ref={firstName}
              type="text"
              className="validate"
            />
            <label htmlFor="firstName">First Name</label>
          </div>
          <div className="input-field col s6">
            <input
              id="lastName"
              ref={lastName}
              type="text"
              className="validate"
            />
            <label htmlFor="lastName">Last Name</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s6">
            <input
              placeholder="Phone"
              id="phone"
              ref={phone}
              type="text"
              className="validate"
            />
            <label htmlFor="phone">Phone</label>
          </div>
          <div className="input-field col s6">
            <input id="email" ref={email} type="email" className="validate" />
            <label htmlFor="email">Email</label>
          </div>
        </div>
        <button className="btn waves-effect waves-light">
          {" "}
          Add New Player
        </button>
      </form>
    </div>
  );
};

export default AddPlayer;
