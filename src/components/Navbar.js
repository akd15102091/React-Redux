import React from "react"

function Navbar() {
  return (
    <React.Fragment>
        <div className="contaner-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                    
                        <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"#E5E5E5"}}>
                        <a className="navbar-brand name" href="#">YourChallange</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                    
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                            <a  className="nav-link" href="/">Product <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                            <a activeClassName="menu_active" className="nav-link" href="/service">Download</a>
                            </li>
                            <li className="nav-item">
                            <a activeClassName="menu_active" className="nav-link" href="/about">Pricing</a>
                            </li>
                        </ul>
                        
                        </div>
                    </nav>
                    </div>
                </div>
            </div>
    </React.Fragment>
  );
}

export default Navbar;
