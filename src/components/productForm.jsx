import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Container, Box, Typography, FormControlLabel, Checkbox } from '@mui/material';

const ProductForm = ({ initialData = {}, onSubmit }) => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: initialData.name || '',
            price: initialData.price || '',
            category: initialData.category || '',
            description: initialData.description || '',
            available: initialData.available || false,
        },
    });

    const onSubmitForm = (data) => {
        onSubmit({ ...data, price: +data.price });
    };

    return (
        <Container maxWidth="sm">
            <Box
                component="form"
                onSubmit={handleSubmit(onSubmitForm)}
                sx={{
                    backgroundColor: 'white',
                    padding: '24px',
                    borderRadius: '8px',
                    boxShadow: 3,
                }}
            >
                <Typography variant="h6" gutterBottom>
                    Product Form
                </Typography>
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    <TextField
                        fullWidth
                        label="Name"
                        {...register('name', { required: 'Name is required' })}
                        error={!!errors.name}
                        helperText={errors.name?.message}
                    />
                    <TextField
                        fullWidth
                        label="Price"
                        type="text"
                        {...register('price', { 
                            required: 'Price is required', 
                            min: { value: 0.01, message: 'Price must be a positive number' } 
                        })}
                        error={!!errors.price}
                        helperText={errors.price?.message}
                    />
                    <TextField
                        fullWidth
                        label="Category"
                        {...register('category', { required: 'Category is required' })}
                        error={!!errors.category}
                        helperText={errors.category?.message}
                    />
                    <TextField
                        fullWidth
                        label="Description"
                        {...register('description')}
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                {...register('available')}
                            />
                        }
                        label="Available"
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Submit
                    </Button>
                </div>
            </Box>
        </Container>
    );
};

export default ProductForm;
