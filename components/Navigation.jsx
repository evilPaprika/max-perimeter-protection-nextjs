import matter from 'gray-matter';
import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

import navigationContent from '../content/navigation.md';


export default function Navigation() {
    const { navlinks } = matter(navigationContent).data;

    return (
        <>
            <Navbar bg="primary" variant="dark" expand="sm" className="mt-4 mb-3">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <span className="navbar__links">
                        <Nav className="mr-auto">
                            {navlinks.map(({ label, slug, sub_links }) => {
                                if (!sub_links || !sub_links.length) {
                                    return (
                                        <Nav.Link key={slug} href={`/templated-page/${slug}`}>
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
                                                    key={sub_slug}
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
                    }
                `}
            </style>
        </>
    );
}
