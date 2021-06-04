import { useState, useEffect } from 'react'
import axios from 'axios';
import Loader from 'react-loader-spinner';
import ModalAlert from './ModalAlert';
import { Redirect } from "react-router"

const CarPage = ({ id }) => {

    const [cars, setCars] = useState([])
    const [car, setCar] = useState('')
    const [error, setError] = useState(false)

    // useEffect(() => {
    //     //setLoading(true);
    //     axios.get(`http://localhost:5000/cars/${id}`)
    //         .then(res => {
    //             setCar(res.data)
    //             console.log("Res: " + res)
    //         })
    //         .catch(err => {
    //             console.log(err)
    //             setError(err)
    //         })
    // }, [])

    useEffect(() => {
        axios.get(`https://p4bpnjfcvj.execute-api.us-east-1.amazonaws.com/dev/cars`)
            .then(res => {
                console.log(res.data.body)
                setCars(res.data.body)
                doSetCar()
            })
            .catch(err => {
                console.log(err)
                setError(err)
            })
    }, [])

    const doSetCar = () => {
        cars.map(val => {
            if (val.id == id) {
                console.log(val)
            }
        })
    }


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

    return (
        <>
            {cars.filter((val) => {
                if (val.id == id) {
                    return val
                }
            }).map((car) => (

                <>
                    <div className="content-wrapper">
                        {/* Content Header (Page header) */}
                        <div className="content-header">
                            <div className="container">
                                <div className="card card-solid">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-12 col-sm-6 align-middle">
                                                <div className="col-12">
                                                    <img src={car.image} className="product-image" alt="Product Image" />
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <h3 className="my-3">{car.brand} {car.model}</h3>
                                                <p></p>
                                                <hr />
                                                <div className="row">
                                                    <div className="col-3"><h5>Brand: {car.brand}</h5></div>
                                                    <div className="col-3"><h5>Model: {car.model}</h5></div>
                                                    <div className="col-3"><h5>Color: {car.color}</h5></div>
                                                    <div className="col-3">{car.reserved ? <h5 className="text-danger">Reserved</h5> : <h5 className="text-success">Available</h5>}</div>
                                                </div>
                                                <div className="bg-gray py-2 px-3 mt-4">
                                                    <h2 className="mb-0">
                                                        {car.price.toFixed(2)} €
                                    </h2>
                                                    <h4 className="mt-0">
                                                        <small>W/Tax: {(car.price / 1.23).toFixed(2)} € </small>
                                                    </h4>
                                                </div>
                                                <div className="mt-4">
                                                    <form action={"/car/reservation/" + car.id}>
                                                        <button type='submit' className="btn btn-primary btn-lg" disabled={car.reserved}>
                                                            <i className="fas fa-cart-plus fa-lg mr-2" />
                                            Reserve
                                        </button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </>
            ))}
        </>
    )
}

export default CarPage