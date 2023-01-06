import React from "react";

const Navbar = () => {
	return (
        <nav className="navbar navbar-expand-lg" style={{backgroundColor: "RGB(52, 58, 64)"}}>
  <div className="container">
    <a className="navbar-brand" href="#" style={{color: "RGB(234, 236, 239)"}}>Start Bootstrap</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" style={{justifyContent: "right"}}id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#" style={{color: "RGB(234, 236, 239)"}}>Home</a>
        <a className="nav-link" href="#" style={{color: "RGB(127, 130, 133)"}}>About</a>
        <a className="nav-link" href="#" style={{color: "RGB(127, 130, 133)"}}>Services</a>
        <a className="nav-link disabled" style={{color: "RGB(127, 130, 133)"}}>Contact</a>
      </div>
    </div>
  </div>
</nav>
	);
};

export default Navbar;