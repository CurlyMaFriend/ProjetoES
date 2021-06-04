import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
                {/* Navbar */}
                <nav className="main-header navbar navbar-expand-md navbar-light navbar-white">
                    <div className="container">
                        <a href="/cars" className="navbar-brand">
                            <img src="../../dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                            <span className="brand-text font-weight-light">Another Car Stand</span>
                        </a>
                        <button className="navbar-toggler order-1" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                    </div>
                </nav>
                {/* /.navbar */}

            </div>
        )
    }
}
