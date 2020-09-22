import matter from 'gray-matter';
import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

import navigationContent from '../content/navigation.md';


export default function Navigation() {
    const { navlinks } = matter(navigationContent).data;

    return (
        <>
            <Navbar variant="light" expand="xl" className="mt-4 bg-xl-tranparent mb-3 px-0  text-primary ">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <span className="navbar__links">
                        <Nav className="mr-auto">
                            {navlinks.map(({ label, slug, sub_links }) => {
                                if (!sub_links || !sub_links.length) {
                                    return (
                                        <Nav.Link key={label} href={`/templated-page/${slug}`}>
                                            {label}
                                        </Nav.Link>
                                    );
                                }

                                return (
                                    <NavDropdown key={label} title={label} id="basic-nav-dropdown">
                                        {sub_links.map(({ label: sub_label, slug: sub_slug }) => {
                                            return (
                                                <NavDropdown.Item
                                                    className="navbar__dropdownItem"
                                                    key={sub_label}
                                                    href={`/templated-page/${sub_slug}`}
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
            <style global jsx>
                {`
                    .navbar__links {
                        font-size: 18px;
                        font-weight: 600;
                        white-space: nowrap;
                        width: 100%;
                    }
                    
                    .navbar__links .navbar-nav {
                        justify-content: center;
                    }
                    
                    .navbar__links .navbar-nav a {
                        color: var(--primary) !important;
                    }
                    
                    @media (min-width: 1200px) {
                        .navbar__links .navbar-nav > *:not(:last-child) {
                            box-shadow: 10px 0 0 -7px var(--primary);
                        }
                        .navbar__links .navbar-nav > * {
                            margin: 0 3px;
                        }
                    }
                    @media (max-width: 576px) {
                        .navbar__links .navbar-nav a {
                            white-space: normal;
                        }
                    }
                `}
            </style>
        </>
    );
}
