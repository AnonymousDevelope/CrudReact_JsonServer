import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function Update() {
  const navigat = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState({ id: "", title: "", telegram: "", information: "" });
  useEffect(() => {
    axios.get(`http://localhost:3030/contacts/${id}`)
      .then(response => {
        setData(response.data);
      })
      .catch(error => console.log(error));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3030/contacts/${id}`, data)
      .then(res => {
        alert("Successfully updated");
        navigat('/');
      })
      .catch(error => console.log(error));
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container w-50 mx-auto mt-3">
      <form onSubmit={handleSubmit}>
        <label htmlFor="ID">ID</label>
        <input
          name="ID"
          className="form-control"
          type="text"
          value={data.id}
          disabled
        />
        <label htmlFor="title">Title:</label>
        <input
          value={data.title}
          type="text"
          name="title"
          className="form-control"
          onChange={handleChange}
        />
        <label htmlFor="telegram">Telegram:</label>
        <input
          value={data.telegram}
          type="text"
          name="telegram"
          className="form-control"
          onChange={handleChange}
        />
        <label htmlFor="information">Text:</label>
        <textarea
          value={data.information}
          name="information"
          className="form-control"
          cols="30"
          rows="10"
          onChange={handleChange}
        ></textarea>
        <button
          type="submit"
          className="d-flex mx-auto mt-3 btn btn-outline-success"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Update;
