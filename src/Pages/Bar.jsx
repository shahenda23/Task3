import React from "react";
import Box from '@mui/material/Box';
import { AppBar, Toolbar, Typography, IconButton, Badge } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Bar = () => {
  const totalQuantity = useSelector((store) => store.cart.totalQuantity);

  return (
    <AppBar position="fixed" style={{ backgroundColor: "#bbaaa1" }}>
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">
          Our Store{" "} 
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Link to="/" style={{ color: "#fff", textDecoration: "none" } }>
            HOME
          </Link>
        <Link to="/cart" style={{ color: "#fff" }}>
          <IconButton color="inherit">
            <Badge badgeContent={totalQuantity} color="primary">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Bar;
