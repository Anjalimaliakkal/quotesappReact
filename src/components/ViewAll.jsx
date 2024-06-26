import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewAll = () => {
    const [data, changeData] = useState(
{ "quotes":[]}
    )
    const fetchData = () => {
axios.get("https://dummyjson.com/quotes").then(
    (response)=>{
        changeData(response.data)
    }
).catch().finally()
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <NavBar />
            <h1><center>VIEWALL QUOTES</center></h1>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            {
                                data.quotes.map(
                                    (value, index) => {
                                        return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                            <div className="card">
                                                <div className="card-body">
                                                    <h5 className="card-title">{value.id}</h5>
                                                    <p className="card-text">QUOTE:{value.quote}</p>
                                                    <p className="card-text">AUTHOR:{value.author}</p>
                                                    <a href="#" className="btn btn-primary">view</a>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll