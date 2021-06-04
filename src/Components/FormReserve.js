import axios from 'axios';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const FormReserve = ({ id, onReserve }) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [code, setCode] = useState('')
    const [city, setCity] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if (!name || !email || !address || !code || !city) {
            toast.error('Please insert all data bellow', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            onReserve(name, email, address, code, city, id, toast)
        }

    }
    return (
        <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <div className="content-header">
                <div className="container">
                    <ToastContainer
                        position="top-center"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss={false}
                        draggable
                        pauseOnHover
                    />
                    <div className="row content-header">
                        <div className="col-md-12">
                            <h1>Car Reservation</h1>
                        </div>
                    </div>
                    <div className="row">
                        {/* left column */}
                        <div className="col-md-12">
                            {/* general form elements */}
                            <div className="card card-secondary">
                                <div className="card-header">
                                    <h3 className="card-title">User Data</h3>
                                </div>
                                {/* /.card-header */}
                                {/* form start */}
                                <form onSubmit={onSubmit}>
                                    <div className="card-body">
                                        <div className="form-group">
                                            <label htmlFor="nameInput">Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter your name"
                                                id="nameInput"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="emailInput">Email address</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Enter your email"
                                                id="emailInput"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="addressInput">Address</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter your address"
                                                id="addressInput"
                                                value={address}
                                                onChange={(e) => setAddress(e.target.value)}
                                            />
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-md-6">
                                                <label htmlFor="codeInput">Postcode</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="codeInput"
                                                    placeholder="Postcode"
                                                    value={code}
                                                    onChange={(e) => setCode(e.target.value)}
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="cityInput">City</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="cityInput"
                                                    placeholder="City"
                                                    value={city}
                                                    onChange={(e) => setCity(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {/* /.card-body */}
                                    <div className="card-footer">
                                        <a className="w-25 btn btn-danger" href="/cars">Cancel</a>
                                        <button type="submit" className="w-25 btn btn-success float-right">Submit</button>
                                    </div>
                                </form>
                            </div>
                            {/* /.card */}</div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default FormReserve