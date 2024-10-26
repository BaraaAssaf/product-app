import axios from 'axios';
import { toast } from 'react-toastify';

const api = axios.create({
    baseURL: 'http://localhost:5000/api/', 
    timeout: 5000,
});

const handleAxiosError = (error) => {
    if (error.response) {
        toast.error(error.response.data.message || 'Server Error');
        return { 
            success: false, 
            message: error.response.data.message || 'Server Error', 
            status: error.response.status 
        };
    } else if (error.request) {
        console.error('No Response:', error.request);
        toast.error('No response from server. Please check your network connection.');
        return { 
            success: false, 
            message: 'No response from server. Please check your network connection.' 
        };
    } else {
        console.error('Error Message:', error.message);
        toast.error('Network Error or Unexpected Error: ' + error.message);
        return { 
            success: false, 
            message: 'Network Error or Unexpected Error: ' + error.message 
        };
    }
};

export const fetchProducts = async (filters = {}) => {
    try {
        const response = await api.get('/products', { params: filters });
         return { success: true, data: response.data };
    } catch (error) {
        return handleAxiosError(error);
    }
};

export const addProduct = async (productData) => {
    try {
        const response = await api.post('/products', productData);
        toast.success('Product added successfully!');
        return { success: true, data: response.data };
    } catch (error) {
        return handleAxiosError(error);
    }
};

export const updateProduct = async (id, productData) => {
    try {
        const response = await api.put(`/products/${id}`, productData);
        toast.success('Product updated successfully!');
        return { success: true, data: response.data };
    } catch (error) {
        return handleAxiosError(error);
    }
};

export const deleteProduct = async (id) => {
    try {
        const response = await api.delete(`/products/${id}`);
        toast.success('Product deleted successfully!');
        return { success: true, data: response.data };
    } catch (error) {
        return handleAxiosError(error);
    }
};
