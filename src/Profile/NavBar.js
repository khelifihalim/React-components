import React from 'react'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg ">
    <div className="container-fluid ">
      <a className="navbar-brand mr" href="www.a.com"><h1 style={{color:"orange"}}>K.H</h1></a>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse spcbtw " id="navbarSupportedContent">
        <ul className="navbar-nav ml">
          <li className="nav-item">
            <a className="nav-link active aorange" aria-current="page" href="www.a.com">Home</a>     
          </li>
          <li className="nav-item">
            <a className="nav-link" href="www.a.com">Link1</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="b.com">Link2</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="c.com">Link3</a>
          </li>
        </ul>
        
      </div>
    </div>
  </nav>
  
  )
}

export default NavBar
