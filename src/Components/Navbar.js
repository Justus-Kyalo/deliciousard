import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
    return (        
        <nav class="navbar bg-light">
            <div class="container-fluid">
            <a class="navbar-brand">Deliciousard</a>
            <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search item.." aria-label="Search"/>
            <button class="btn btn-outline-success" type="submit">Search</button>
      <a href="#"> <i class="fas fa-shopping-cart"></i></a> 
    </form>
  </div>
</nav>
        
    );
}

export default Navbar;
