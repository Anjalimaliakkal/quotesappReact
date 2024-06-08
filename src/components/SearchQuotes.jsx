import React from 'react'
import NavBar from './NavBar'

const SearchQuotes = () => {
    return (
        <div>
            <NavBar/>
            <h1><center>SEARCH QUOTES</center></h1>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            <div className="col col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl 6">
                                <label htmlFor="" className="control-label">ID</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl 6">
                                <button className="btn btn-success">SEARCH</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchQuotes