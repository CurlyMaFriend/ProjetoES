import React, { Component } from 'react'

export default class Menu extends Component {
    render() {
        const active = true;
        const disabled = false;
        return (
            <div>
                {/* Main Sidebar Container */}
                <aside className="main-sidebar sidebar-dark-primary elevation-4">
                    {/* Brand Logo */}
                    <a href="index3.html" className="brand-link">
                        <img src="https://adminlte.io/themes/v3/dist/img/AdminLTELogo.png" alt="Car Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                        <span className="brand-text font-weight-light">Another Stand</span>
                    </a>
                    {/* Sidebar */}
                    <div className="sidebar text-center">
                        {/* Sidebar Menu */}
                        <nav className="mt-2">
                            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                                <li className="nav-item mt-5">
                                    <a href="pages/gallery.html" className="nav-link">
                                        <i className="nav-icon fas fa-home" />
                                        <p>
                                            Home
                                        </p>
                                    </a>
                                </li>
                                <li className="nav-item mt-5">
                                    <a href="pages/gallery.html" className="nav-link">
                                        <i className="nav-icon fas fa-car" />
                                        <p>
                                            Cars
                                        </p>
                                    </a>
                                </li>
                                <li className="nav-item mt-5">
                                    <a href="pages/gallery.html" className="nav-link">
                                        <i className="nav-icon far fa-address-card" />
                                        <p>
                                            About Us
                                        </p>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        {/* /.sidebar-menu */}
                    </div>
                    {/* /.sidebar */}
                </aside>
            </div>

        )
    }
}
