import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { adddata } from "./context/ContextProvider";

const Register = () => {
  const { udata, setUdata } = useContext(adddata);
  const navigate = useNavigate();

  const [inpval, setINP] = useState({
    name: "",
    email: "",
    age: "",
    mobile: "",
    work: "",
    add: "",
    desc: "",
  });

  const setdata = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setINP((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const addinpdata = async (e) => {
    e.preventDefault();

    const { name, email, age, mobile, work, add, desc } = inpval;

    if (name === "") {
      alert("name is required");
    } else if (email === "") {
      alert("email is required");
    } else if (!email.includes("@")) {
      alert("Enter vaild email");
    } else if (work === "") {
      alert("work is required");
    } else if (add === "") {
      alert("address is required");
    } else if (mobile === "") {
      alert("mobile is required");
    } else if (age === "") {
      alert("age is required");
    } else {
      const res = await fetch("/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          age,
          mobile,
          work,
          add,
          desc,
        }),
      });

      const data = await res.json();
      console.log(data);

      if (res.status === 422 || !data) {
        console.log("error");
        alert("error");
      } else {
        navigate("/");
      }
    }
  };

  return (
    <div className="container">
      <NavLink to={"/"} className={"btn btn-primary mt-1"}>
        Back
      </NavLink>
      <h3 className="mt-1">Add New Data </h3>
      <form className="mt-3">
        <div className="row">
          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputEmail1" class="form-label">
              Name
            </label>
            <input
              type="text"
              name="name"
              class="form-control"
              id="exampleInputEmail1"
              onChange={setdata}
              value={inpval.name}
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" class="form-label">
              email
            </label>
            <input
              value={inpval.email}
              onChange={setdata}
              type="email"
              name="email"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" class="form-label">
              age
            </label>
            <input
              value={inpval.age}
              onChange={setdata}
              type="number"
              name="age"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" class="form-label">
              Mobile
            </label>
            <input
              value={inpval.mobile}
              onChange={setdata}
              type="number"
              name="mobile"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" class="form-label">
              Work
            </label>
            <input
              value={inpval.work}
              onChange={setdata}
              type="text"
              name="work"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" class="form-label">
              Address
            </label>
            <input
              value={inpval.add}
              onChange={setdata}
              type="text"
              name="add"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3 col-lg-12 col-md-12 col-12">
            <label for="exampleInputPassword1" class="form-label">
              Description
            </label>
            <textarea
              value={inpval.desc}
              onChange={setdata}
              name="desc"
              className="form-control"
              id=""
              cols="30"
              rows="3"
            ></textarea>
          </div>
          <button type="submit" onClick={addinpdata} class="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
