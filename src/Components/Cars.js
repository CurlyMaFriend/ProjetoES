import Car from './Car'
import { useState, useEffect } from 'react'
import axios from 'axios';
import Loader from 'react-loader-spinner';
import ModalAlert from './ModalAlert';
import { Redirect } from "react-router"

const Cars = ({ }) => {

    const [cars, setCars] = useState([])
    const [error, setError] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        axios.get(`https://p4bpnjfcvj.execute-api.us-east-1.amazonaws.com/dev/cars`)
            .then(res => {
                setCars(res.data.body)
            })
            .catch(err => {
                console.log(err)
                setError(err)
            })
    }, [])

    if (cars == "" && error == "") {
        return (
            <div className="row justify-content-center">
                <div className="col-2 align-self-center w-100">
                    <Loader
                        type="ThreeDots"
                        color="#00BFFF"
                        height={100}
                        width={100}
                    />
                </div>
            </div>
        )
    } else if (cars == "" && error != "") {
        return (
            <Redirect to={'/cars'} />
        )
    }

    console.log(cars)

    return (
        <>
            {/* Content Wrapper. Contains page content */}
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <div className="content-header">
                    <div className="container">
                        <div className="row mb-2">
                            <div className="col-lg-2 col-sm-4 col">
                                <h1 className="m-0"> Available Cars </h1>
                            </div>{/* /.col */}
                            <div className="col-lg-10 col-sm-4 col">
                                <form action="simple-results.html">
                                    <div className="input-group">
                                        <input type="search" className="form-control" placeholder="Type your keywords here" onChange={event => { setSearchTerm(event.target.value) }} />
                                        <div className="input-group-append">
                                            <p className="btn btn-default">
                                                <i className="fa fa-search" />
                                            </p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>{/* /.row */}
                    </div>{/* /.container-fluid */}
                </div>
                {/* /.content-header */}
                {/* Main content */}
                <div className="content">
                    <div className="container">
                        <div className="row">
                            {cars.filter((val) => {
                                if (searchTerm == "") {
                                    return val
                                } else if (val.brand.toLowerCase().includes(searchTerm.toLowerCase())) {
                                    return val
                                } else if (val.model.toLowerCase().includes(searchTerm.toLowerCase())) {
                                    return val
                                } else if (val.color.toLowerCase().includes(searchTerm.toLowerCase())) {
                                    return val
                                }
                            }).map((car) => (
                                <Car key={car.id} car={car} />
                            ))}
                        </div>
                        {/* /.row */}
                    </div>{/* /.container-fluid */}
                </div>
                {/* /.content */}
            </div>
            {/* /.content-wrapper */}

        </>
    )
}

export default Cars
