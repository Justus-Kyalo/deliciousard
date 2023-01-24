import React from 'react';


function Navbar() {
    return (    <>    
        <nav className="navbar bg-light">
            <div className="container-fluid">
            <a href='##' className="navbar-brand">Deliciousard</a>
            <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search item.." aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
      <a href="##"> <i className="fas fa-shopping-cart"></i></a> 
    </form>
  </div>
</nav>
</>
        
    );
}

export default Navbar;
