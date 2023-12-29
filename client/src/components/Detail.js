import { useEffect, useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WorkIcon from "@mui/icons-material/Work";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import profile from "./profile.png";

const Details = () => {
  const [getuserdata, setUserdata] = useState([]);
  console.log(getuserdata);

  const { id } = useParams("");
  console.log(id);

  const navigate = useNavigate();

  const getdata = async () => {
    const res = await fetch(`/induser/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      console.log("error ");
    } else {
      setUserdata(data[0]);
      console.log("get data");
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  const deleteuser = async (id) => {
    const res2 = await fetch(`/deleteuser/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const deletedata = await res2.json();
    console.log(deletedata);

    if (res2.status === 422 || !deletedata) {
      console.log("error");
    } else {
      console.log("user deleted");
      navigate("/");
    }
  };

  return (
    <div className="container mt-3">
      <div className="add_btn mb-3">
        <NavLink to={"/"} className={"btn btn-primary "}>
          Back
        </NavLink>
        <NavLink to={`/edit/${getuserdata.id}`}>
          {" "}
          <button className="btn btn-primary mx-2">
            <CreateIcon />
          </button>
        </NavLink>
        <button
          className="btn btn-danger"
          onClick={() => deleteuser(getuserdata.id)}
        >
          <DeleteOutlineIcon />
        </button>
      </div>
      <Card sx={{ maxWidth: 700 }}>
        <CardContent>
          <div className="heading">
            <h1 className="mt-2" style={{ fontWeight: 400 }}>
              {getuserdata.name}
            </h1>
            <img
              src={profile}
              className="mx-3"
              style={{ width: 100 }}
              alt="profile"
            />
          </div>
          <div className="row">
            <div className="left_view col-lg-6 col-md-6 col-12">
              {/* <h3 className="mt-3">
                Name: <span> {getuserdata.name}</span>
              </h3> */}
              <h3 className="mt-3">
                Age: <span>{getuserdata.age}</span>
              </h3>
              <p className="mt-3">
                <MailOutlineIcon />
                Email: <span>{getuserdata.email}</span>
              </p>
              <p className="mt-3">
                <WorkIcon />
                Occuption: <span> {getuserdata.work}</span>
              </p>
            </div>
            <div className="right_view  col-lg-6 col-md-6 col-12 mt-auto">
              <p className="mt-5">
                <PhoneAndroidIcon />
                mobile: <span>+91 {getuserdata.mobile}</span>
              </p>
              <p className="mt-3">
                <LocationOnIcon />
                location: <span>{getuserdata.add}</span>
              </p>
              <p className="mt-3">
                Description: <span>{getuserdata.desc}</span>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Details;
