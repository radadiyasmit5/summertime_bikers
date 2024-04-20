import React from 'react'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import './menuContainer.scss'
const MenuContainer = () => {
    return (
        <span className="menu-items-box">
            <Menu
                // id="basic-menu"
                open={true}

                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                < MenuItem>Profile</MenuItem>
                <MenuItem >My account</MenuItem>
                <MenuItem >Logout</MenuItem>
            </Menu>
        </span>
    )
}

export default MenuContainer