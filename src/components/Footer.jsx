import React from "react"
import Container from 'react-bootstrap/Container'
import '../App.css'

const Footer = () =>{
  return(
    <div className="container">
      <footer id="footer" className="row row-col-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
        <div className="col mb-3">
          <a className="">
          <img src="img/logo.jpg" className="bi me-2" width={180} height={180}>
          </img>
          </a>
          <p>
            A&B - traveling around the world
          </p>
          </div>
          <div className="col mb-4">
            <h5>Column1</h5>
            <ul className="nav flex-column">
              <li className="nav item mb-3">
                <a className="nav-link p-0 text-muted">
                 Writing
                </a>
              </li>
            </ul>
          </div>
        <div className="col mb-4">
            <h5>Column2</h5>
            <ul className="nav flex-column">
              <li className="nav item mb-3">
                <a className="nav-link p-0 text-muted">
                 Writing
                </a>
              </li>
            </ul>
          </div>
      </footer>
    </div>
  )
}
export default Footer