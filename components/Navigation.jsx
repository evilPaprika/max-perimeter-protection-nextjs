import matter from 'gray-matter';
import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

import navigationContent from '../content/navigation.md';


export default function Navigation() {
    const { navlinks } = matter(navigationContent).data;

    return (
        <>
            <Navbar bg="primary" variant="dark" expand="sm" className="mt-4 mb-5">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <span className="navbar__links">
                        <Nav className="mr-auto">
                            {navlinks.map(({ label, slug, sub_links }) => {
                                if (!sub_links || !sub_links.length) {
                                    return (
                                        <Nav.Link
                                            key={slug}
                                            href={slug}
                                        >
                                            {label}
                                        </Nav.Link>
                                    );
                                }

                                return (
                                    <NavDropdown title={label} id="basic-nav-dropdown">
                                        {sub_links.map(({ label: sub_label, slug: sub_slug }) => {
                                            return (
                                                <NavDropdown.Item
                                                    key={sub_slug}
                                                    href={sub_slug}
                                                >
                                                    {sub_label}
                                                </NavDropdown.Item>
                                            );
                                        })}
                                    </NavDropdown>
                                );
                            })}
                        </Nav>
                    </span>
                </Navbar.Collapse>
            </Navbar>
            <style jsx>
                {`
                    .navbar__links {
                        font-size: 18px;
                        font-weight: 600;
                    }
                    
                    :root.navlink {
                        color: #fff !important;
                    }
                `}
            </style>
        </>
    );
}
