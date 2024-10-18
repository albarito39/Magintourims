import React from 'react';

const Navbar = () => {
    return (
        <div className='flex' >
            <nav className="navbar navbar-light bg-light">

                <form className="form-inline row">
                    <div className="col"><input
                        className="form-control mr-sm-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                    /></div>
                    <div className="col"><button className="btn btn-outline-success my-2 my-sm-0" type="submit" >
                        Search
                    </button></div>
                    
                    
                </form>
            </nav>
        </div>
    );
};

export default Navbar;
