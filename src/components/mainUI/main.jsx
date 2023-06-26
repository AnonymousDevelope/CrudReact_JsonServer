import React, { useEffect, useState } from 'react';
// import DB from "../../db.json";
import $ from 'jquery';
import { Link, useParams } from 'react-router-dom';
import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js";
import axios from 'axios';

const Main = () => {
  const [columns,setColumns] = useState([]);
  const [records,setRecords] = useState([]);
  useEffect(() => {
    const heightBlock = $(".block").innerHeight();
    if (heightBlock < 200) {
      $(".block").css("height", "200px");
    } else {
      $(".block").css("height", "auto");
    }

   axios.get('http://localhost:3030/contacts').then((response) => {
    setColumns(Object.keys(response.data[0]));
    setRecords(response.data);
   });
  }, []);
  return (
    <div className="container">
      <Link to='/add' className='btn btn-outline-secondary mt-4' title='Add new table'><i class="fa text-primary fs-2 fa-circle-plus"></i></Link>
      <table className="table">
        <thead>
          <tr>
            {
              columns.map((c,i) => (
                <th key={i}>{c}</th>
              ))
            }
              <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            records.map((d, i) =>(
              <tr key={i}>
                <td>{d.id}</td>
                <td>{d.title}</td>
                <td>{d.telegram}</td>
                <td>{d.information}</td>
                <td>
                  <div className="btn-group">
                    <Link to={`update/${d.id}`} className="btn btn-primary">Update</Link>
                    <button onClick={e=>handleDeleted(d.id)} className="btn btn-danger">Delete</button>
                  </div>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
function handleDeleted(id){
  const ok=window.confirm('Are you sure you want to delete');
  if(ok){
    axios.delete('http://localhost:3030/contacts/'+id).then(res=>{
      alert(res.message+ ' successfully deleted');
    })
    window.location.reload();
  }
}
};
export default Main;
