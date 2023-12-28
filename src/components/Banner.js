import * as React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button"
import AppBar from "./AppBar";
import Toolbar from "./ToolBar";
import SendIcon from '@mui/icons-material/Send';

const rightLink = {
    fontSize: 16,
    color: "common.white",
    ml: 3,
};

function Banner() {
    return (
        <div>
            <AppBar position="fixed">
                <Toolbar sx={{ justifyContent: "space-between" }}>
                    <Box sx={{ flex: 1 }} />
                    <h1> LIBRERIA</h1>
                    <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>

                        <Button variant="contained" color="error" endIcon={<SendIcon />}>
                            Cerrar Sesión
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </div>
    );
}

export default Banner;
