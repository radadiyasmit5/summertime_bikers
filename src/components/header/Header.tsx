'use client';
// import { Link, Outlet } from "react-router-dom"
import Link from 'next/link'
import React, { useContext } from "react"
import "./header.scss"
import summertime_bikers_logo_3_no_bg from '../../../public/summertime_bikers_logo_3_no_bg.png'
import Image from 'next/image'
import SociealBar from './socielBar/SocielBar'
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';
import { SectionContext } from '../context/SectionScrollContext';
import DP_logo_final from '../../../public/DP_logo_final.png'

// import { SectionContext } from "../../context/SectionScrollContext"
// import { Mentions, Menu } from "antd"

// import SociealBar from "./socialBar/SociealBar"

const Header = () => {
    const router = useRouter()
    const {
        handleSectionchange,
        moreInfoRef,
        experienceRef,
        technologiesRef,
        headerRef,
        contactRef,
    } = useContext(SectionContext)


    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const onLogoClick = () => {
        router.push('/')
    }
    return (
        <>
            <header className="Header"
                // ref={headerRef}
                ref={headerRef}
            >
                <nav className="Navbar">

                    {/* <div style={{ width: "10%" }} className="header-logo-div"> */}
                    <span className='flex-1'>
                        <Image className="logo-img" src={summertime_bikers_logo_3_no_bg} alt="nothing" onClick={onLogoClick} />
                    </span>
                    {/* </div> */}
                    <ul className="Nav-links flex-2">
                        <li>
                            <Link
                                href="/"
                                className="nav-link-item"
                            // onClick={() => handleSectionchange(heroRef)}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="about"
                                className="nav-link-item"
                            // onClick={() => handleSectionchange(experienceRef)}
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="pricing"
                                className="nav-link-item"
                            // onClick={() => handleSectionchange(technologiesRef)}
                            >
                                Pricing
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="contactus"
                                className="nav-link-item"
                                as={'contactus'}
                            // onClick={() => handleSectionchange(contactRef)}
                            >
                                Contact us
                            </Link>
                        </li>
                    </ul>
                    <div className="social-bar-container flex-3">
                        <SociealBar />
                    </div>
                    <div className='menu-container'>

                        <Button
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            <span style={{ color: "white" }}>
                                <MenuIcon />
                            </span>
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </Menu>
                    </div>
                </nav>
            </header>

        </>
    )
}

export default Header
