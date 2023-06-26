import React from 'react'
import DB from "../../db.json"
import $ from 'jquery'
import("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js")
const Main = () => {
const heightBlock = $(".block").innerHeight();
if(heightBlock<200){
$(".block").css("height","200px");
}else{
$(".block").css("height", "auto");
}
  return (
    <>
      <div className="container main">
        <div className="row">
          {
            DB.map((data, i) => {
              return (
                <div key={i} className="block d-flex col-md-6">
                  <div className="blockChain w-100">
                    <div className="title">{data.title}</div>
                    <div className="main-part">
                      {data.inform}
                      <a href={data.telegram} className="nav-link fs-3"><i className="fa-brands fa-telegram"></i></a>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )

}
export default Main