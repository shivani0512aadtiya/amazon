

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Col, Container, Row, Form, FormGroup, Button } from 'reactstrap';
import {  useNavigate } from 'react-router-dom';

const AddProducts = () => {
    const navigate = useNavigate();
    const [product, setProductImg] = useState(null);
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [discount, setDiscount] = useState('');
    const [color, setColor] = useState('');
    const [specialfeature, setSpecialfeature] = useState('');
    const [components, setComponents] = useState('');
    const [material, setMaterial] = useState('');
    const [uses, setUses] = useState('');
    const [theme, setTheme] = useState('');
    const [weight, setWeight] = useState('');
    const [style, setStyle] = useState('');
    const [manifacture, setManifacture] = useState('');
    const [model, setModel] = useState('');
    const [modelNumber, setModelNumber] = useState('');
    const [importedBy, setImportedBy] = useState('');
    const [country, setCountry] = useState('');

    const addProduct = async (e) => {
        e.preventDefault();

        if (!product || !description || !price || !discount) {
            alert("Please fill in all required fields.");
            return;
        }

        const formData = new FormData();
        formData.append('product', product);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('discount', discount);
        formData.append('color', color);
        formData.append('specialfeature', specialfeature);
        formData.append('components', components);
        formData.append('material', material);
        formData.append('uses', uses);
        formData.append('theme', theme);
        formData.append('weight', weight);
        formData.append('style', style);
        formData.append('manifacture', manifacture);
        formData.append('model', model);
        formData.append('modelNumber', modelNumber);
        formData.append('importedBy', importedBy);
        formData.append('country', country);

        try {
            const token = localStorage.getItem('token'); // Retrieve the token from storage
              console.log("clh",token)
            if (!token) {
                throw new Error('No authentication token found');
            }

            const response = await axios.post('https://ecommerce-g1tg.onrender.com/addproduct', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`
                }
                
            }
          
        );

           
            console.log('Product added:', response.data);
          
        } catch (error) {
            console.error('Error:', error);
            alert("Failed to add product. Please try again.");
        }
            
     
    };

    return (
        <section className="add-product-section">
            <Container fluid>
                <Row className="justify-content-center">
                    <Col lg="10" md="10" sm="12">
                        <h4 className='mb-4 text-center'>Add Product</h4>
                        <Form onSubmit={addProduct}>
                            <FormGroup className='form-group'>
                                <span>Product image</span>
                                <input type="file" className='form-control' onChange={e => setProductImg(e.target.files[0])} required />
                            </FormGroup>
                            <FormGroup className='form-group'>
                                <span>Description</span>
                                <input type="text" className='form-control' placeholder='Description' value={description} onChange={e => setDescription(e.target.value)} required />
                            </FormGroup>
                            <div className='d-flex align-items-center justify-content-between gap-5'>
                                <FormGroup className='form-group w-50'>
                                    <span>Price</span>
                                    <input type="number" className='form-control' placeholder='Price 1000' value={price} onChange={e => setPrice(e.target.value)} required />
                                </FormGroup>
                                <FormGroup className='form-group w-50'>
                                    <span>Discount</span>
                                    <input type="number" className='form-control' placeholder='Discount' value={discount} onChange={e => setDiscount(e.target.value)} required />
                                </FormGroup>
                            </div>
                            <div className='d-flex align-items-center justify-content-between gap-5'>
                                <FormGroup className='form-group w-50'>
                                    <span>color</span>
                                    <input type="text" className='form-control' placeholder='color' value={color} onChange={e => setColor(e.target.value)} required />
                                </FormGroup>
                                <FormGroup className='form-group w-50'>
                                    <span>specialfeature</span>
                                    <input type="text" className='form-control' placeholder='specialfeature' value={specialfeature} onChange={e => setSpecialfeature(e.target.value)} required />
                                </FormGroup>
                            </div>
                            <div className='d-flex align-items-center justify-content-between gap-5'>
                                <FormGroup className='form-group w-50'>
                                    <span>components</span>
                                    <input type="text" className='form-control' placeholder='components' value={components} onChange={e => setComponents(e.target.value)} required />
                                </FormGroup>
                                <FormGroup className='form-group w-50'>
                                    <span>material</span>
                                    <input type="text" className='form-control' placeholder='material' value={material} onChange={e => setMaterial(e.target.value)} required />
                                </FormGroup>
                            </div>
                            <div className='d-flex align-items-center justify-content-between gap-5'>
                                <FormGroup className='form-group w-50'>
                                    <span>uses</span>
                                    <input type="text" className='form-control' placeholder='uses' value={uses} onChange={e => setUses(e.target.value)} required />
                                </FormGroup>
                                <FormGroup className='form-group w-50'>
                                    <span>theme</span>
                                    <input type="text" className='form-control' placeholder='theme' value={theme} onChange={e => setTheme(e.target.value)} required />
                                </FormGroup>
                            </div>
                            <div className='d-flex align-items-center justify-content-between gap-5'>
                                <FormGroup className='form-group w-50'>
                                    <span>weight</span>
                                    <input type="text" className='form-control' placeholder='weight' value={weight} onChange={e => setWeight(e.target.value)} required />
                                </FormGroup>
                                <FormGroup className='form-group w-50'>
                                    <span>style</span>
                                    <input type="text" className='form-control' placeholder='style' value={style} onChange={e => setStyle(e.target.value)} required />
                                </FormGroup>
                            </div>
                            <div className='d-flex align-items-center justify-content-between gap-5'>
                                <FormGroup className='form-group w-50'>
                                    <span>manifacture</span>
                                    <input type="text" className='form-control' placeholder='manifacture' value={manifacture} onChange={e => setManifacture(e.target.value)} required />
                                </FormGroup>
                                <FormGroup className='form-group w-50'>
                                    <span>model</span>
                                    <input type="text" className='form-control' placeholder='model' value={model} onChange={e => setModel(e.target.value)} required />
                                </FormGroup>
                            </div>
                            <div className='d-flex align-items-center justify-content-between gap-5'>
                                <FormGroup className='form-group w-50'>
                                    <span>modelNumber</span>
                                    <input type="text" className='form-control' placeholder='modelNumber' value={modelNumber} onChange={e => setModelNumber(e.target.value)} required />
                                </FormGroup>
                                <FormGroup className='form-group w-50'>
                                    <span>importedBy</span>
                                    <input type="text" className='form-control' placeholder='importedBy' value={importedBy} onChange={e => setImportedBy(e.target.value)} required />
                                </FormGroup>
                            </div>
                            <div className='d-flex align-items-center justify-content-between gap-5'>
                                <FormGroup className='form-group w-50'>
                                    <span>country</span>
                                    <input type="text" className='form-control' placeholder='country' value={country} onChange={e => setCountry(e.target.value)} required />
                                </FormGroup>
                            </div>
                            <Button type="submit" className='btn-buy-now'
                            onClick={() => navigate('/add-all-product')}
                            >Add Product</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default AddProducts;


