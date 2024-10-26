import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Button, Checkbox, IconButton, Popover, Select, MenuItem, FormControl, InputLabel, Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';

const ProductList = ({ products, onDelete, setFilters, handleEdit }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const router = useRouter(); 

    const handleFilterClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleFilterClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'filter-popover' : undefined;

    const handleFilterChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFilters((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    };

    return (
        <>

       <div  style={{ display: "flex", width:"100%",flexDirection: "row", justifyContent: "space-between" }}>   
            <IconButton aria-describedby={id} onClick={handleFilterClick}>
                <FilterListIcon />
            </IconButton>

            <Button
                variant="contained"
                color="primary"
                onClick={() => router.push('/products/add')} 
                style={{ marginLeft: '8px' }}
            >
                Add Product
            </Button>
            </div>     
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleFilterClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <FormControl fullWidth>
                        <InputLabel>Price</InputLabel>
                        <Select
                            name="price"
                            label="Price"
                            onChange={handleFilterChange}
                            defaultValue=""
                        >
                            <MenuItem value={"lowest"}>Lowest</MenuItem>
                            <MenuItem value={"highest"}>Highest</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl fullWidth>
                        <InputLabel>Category</InputLabel>
                        <Select
                            name="category"
                            label="Category"
                            onChange={handleFilterChange}
                            defaultValue=""
                        >
                            <MenuItem value={"food"}>Food</MenuItem>
                            <MenuItem value={"drink"}>Drink</MenuItem>
                        </Select>
                    </FormControl>

                    <label>
                        <Checkbox name="available" onChange={handleFilterChange} />
                        Available
                    </label>
                </div>
            </Popover>

            <Grid container spacing={2} style={{ marginTop: '16px' }}>
                {products.map((product) => (
                    <Grid item xs={2} sm={8} md={4} lg={4} key={product.id}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://img.freepik.com/free-vector/gradient-dynamic-blue-lines-background_23-2148995756.jpg" // Placeholder image
                                alt={product.name}
                            />
                            <CardContent>
                                <Typography variant="h6">{product.name}</Typography>
                                <Typography variant="body2" color="text.secondary">
                                    ${product.price}
                                </Typography>

                                <Button
                                    onClick={() => handleEdit(product.id)}
                                    color="primary"
                                    style={{ marginRight: '8px' }}
                                >
                                    Edit
                                </Button>
                                <Button onClick={() => onDelete(product.id)} color="secondary">
                                    Delete
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default ProductList;
