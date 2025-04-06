import * as React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { IconButton, Button, Typography, Box } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/cart";
import '../Department.css'; 

function Products(props) {
    if (!props.item) return null; 
    const dispatch = useDispatch();
    const [favorites, setFavorites] = useState([]);

    const toggleFavorite = (id) => {
        if (!id) return; 
        setFavorites((prevFavorites) =>
            prevFavorites.includes(id)
                ? prevFavorites.filter((fav) => fav !== id)
                : [...prevFavorites, id]
        );
    };

    const handleAddToCart = (item) => {
        if (!item) return;
        try {
            dispatch(addToCart(item));
            console.log("Added to Cart:", item);
        } catch (error) {
            console.error("Error adding to cart:", error);
        }
    };

    return (
        <Card sx={{ maxWidth: 345 }} className="department-container">
            <Box sx={{ 
                height: 160, 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                overflow: "hidden" 
            }}>
                <CardMedia
                    component="img"
                    image={props.item.image}
                    title={props.item.title}
                    sx={{ 
                        maxHeight: "100%", 
                        maxWidth: "100%", 
                        objectFit: "contain" 
                    }}
                />
            </Box>

            <CardContent>
                <Typography gutterBottom variant="body1" component="div">
                    {props.item.title}
                </Typography>

                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    <b>Price:</b> {`EGP${props.item.price}`}
                </Typography>

                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    <b>Category:</b> {props.item.category}
                </Typography>

                <Typography variant="body2" sx={{ color: "text.secondary", height: 50, overflow: "hidden" }}>
                    <b>Description:</b> {props.item.description?.length > 100 
                        ? `${props.item.description.substring(0, 100)}...` 
                        : props.item.description}
                </Typography>
            </CardContent>

            <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
                <IconButton onClick={() => props.item.id && toggleFavorite(props.item.id)}>
                    <FavoriteIcon sx={{ color: favorites.includes(props.item.id) ? "red" : "gray" }} />
                </IconButton>

                <button onClick={() => handleAddToCart(props.item)} className="increment-button">
                    ADD TO CART
                </button>
            </CardActions>
        </Card>
    );
}

export default Products;