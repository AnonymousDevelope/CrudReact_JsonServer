import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Add = () => {
    const [data, setData] = useState({
        id:Number(),
        title: "",
        telegram: "",
        information: "", // Changed "inform" to "information"
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name.trim()]: e.target.value,
        });
        console.log(e.target.name);
    };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            await axios.post("http://localhost:3030/contacts", data, {
                headers: {
                    "Content-Type": "application/json",
                },
            }).then(
                alert("Data submitted successfully")
            ).catch(error => {
                console.error(error.response);
            })
            navigate("/")
        } catch (err) {
            console.log("muammo :\n", err.response.data);
        }
    };

    return (
        <div className="container w-50 mx-auto mt-3">
            <form>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    name="title"
                    className="form-control"
                    onChange={handleChange}
                />
                <label htmlFor="telegram">Telegram:</label>
                <input
                    type="text"
                    name="telegram"
                    className="form-control"
                    onChange={handleChange}
                />
                <label htmlFor="information">Text:</label>
                <textarea
                    name="information"
                    className="form-control"
                    cols="30"
                    rows="10"
                    onChange={handleChange}
                ></textarea>
                <button
                    onClick={handleSubmit}
                    type="button"
                    className="d-flex mx-auto mt-3 btn btn-outline-success"
                >
                    Send
                </button>
            </form>
        </div>
    );
};

export default Add;
