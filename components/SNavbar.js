import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import React, { useState, useEffect } from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faGift, faUserPlus, faList } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";


export default function SNavbar() {
    let [pseudo, setPseudo] = useState([])

    useEffect(() => {
        setPseudo(localStorage.getItem("pseudo"))
    });

    const isLoggedIn = () => {
        return pseudo != null && pseudo.length > 6
    }

    const userNav = () => {
        return (
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text className={"mx-3"}>
                    <Link href={"/collection"}>
                        <a><FontAwesomeIcon width={"30"} icon={faList} /></a>
                    </Link>
                </Navbar.Text>
                <Navbar.Text className={"mx-3"}>
                    <FontAwesomeIcon width={"30"} icon={faUserPlus} />
                </Navbar.Text>
                <Navbar.Text className={"mx-3"}>
                    <Link href={"/ideas/create"}>
                        <a><FontAwesomeIcon width={"30"} icon={faGift} /></a>
                    </Link>
                </Navbar.Text>
                <NavDropdown title={ pseudo } id="basic-nav-dropdown">
                    <NavDropdown.Item>
                        <Link href={"/users/logout"}>
                            Se déconnecter
                        </Link>
                    </NavDropdown.Item>
                </NavDropdown>
            </Navbar.Collapse>
        )
    }

    const anonymNav = () => {
        return (
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text className={"mx-3"}>
                    <Link href={"/users/signin"}>
                        Se connecter
                    </Link>
                </Navbar.Text>
                <Navbar.Text className={"mx-3"}>
                    <Link href={"/users/signup"}>
                        Créer un compte
                    </Link>
                </Navbar.Text>
            </Navbar.Collapse>
        )
    }
    return (
        <Navbar>
            <Navbar.Brand>
                <Link href={"/"}>
                Somei
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle />
            { isLoggedIn() ? userNav() : anonymNav() }
        </Navbar>

    )
}