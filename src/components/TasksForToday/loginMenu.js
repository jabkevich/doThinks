import React from 'react';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect,
    useLocation
} from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Menu from "@material-ui/core/Menu";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
    },
    paper: {
        marginRight: theme.spacing(2),
    },
}));

export default function MenuListComposition() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }
    // return focus to the button when we transitioned from !open -> open


    return (
        <div className={classes.root}>
            <div>
                <Button
                    ref={anchorRef}
                    aria-controls={"open ? 'menu-list-grow' : undefined"}
                    aria-haspopup="true"
                    onClick={handleToggle}
                >
                   jabkevich
                </Button>
                <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition >
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                        >
                            <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList autoFocusItem={open}  id="simple-menu" onKeyDown={handleListKeyDown}>
                                        <MenuItem onClick={handleClose}><a href={"https://www.instagram.com/dmitry.jabkevich/"}>Profile</a></MenuItem>
                                        <MenuItem onClick={handleClose}>My account</MenuItem>
                                        <MenuItem onClick={handleClose}><Link to="/">Logout</Link></MenuItem>
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </div>
        </div>
    );
}

//
// export default function MenuListComposition() {
//     const classes = useStyles();
//     const [anchorEl, setAnchorEl] = React.useState(null);
//
//     const handleClick = (event) => {
//         setAnchorEl(event.currentTarget);
//     };
//
//     const handleClose = () => {
//         setAnchorEl(null);
//     };
//
//     return (
//         <div className={classes.root}>
//             <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
//                 jabkevich
//             </Button>
//             <Menu
//                 id="simple-menu"
//                 anchorEl={anchorEl}
//                 keepMounted
//                 open={Boolean(anchorEl)}
//                 onClose={handleClose}
//             >
//                 <MenuItem onClick={handleClose}><a
//                     href={"https://www.instagram.com/dmitry.jabkevich/"}>Profile</a></MenuItem>
//                 <MenuItem onClick={handleClose}>My account</MenuItem>
//                 <MenuItem onClick={handleClose}><Link to="/">Logout</Link></MenuItem>
//             </Menu>
//         </div>
//     );
// }
