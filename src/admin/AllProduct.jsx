import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Col, Container, Row, Button, Table, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

const AllProduct = () => {
    const [tableData, setTableData] = useState([]);
    const [error, setError] = useState(null);
    const [modal, setModal] = useState(false);
    const [currentProduct, setCurrentProduct] = useState(null);
    const [updatedProduct, setUpdatedProduct] = useState({
        product: null,
        description: '',
        price: '',
    });

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    throw new Error('No authentication token found');
                }
                const response = await axios.get('https://ecommerce-g1tg.onrender.com/getproduct', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                if (response.data && Array.isArray(response.data.photos)) {
                    setTableData(response.data.photos);
                } else {
                    setTableData([]);
                    console.error('Unexpected response data format:', response.data);
                }
            } catch (error) {
                console.error('Error fetching products:', error);
                setError(error.message);
            }
        };

        fetchProducts();
    }, []);

    const deleteProduct = async (productId) => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('No authentication token found');
            }
            const response = await axios.delete(`https://ecommerce-g1tg.onrender.com/deleteproduct/${productId}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (response.status === 200) {
                setTableData(tableData.filter(item => item._id !== productId));
            } else {
                console.error('Error deleting product:', response);
            }
        } catch (error) {
            console.error('Error deleting product:', error);
            setError(error.message);
        }
    };

    const openUpdateModal = (product) => {
        if (product && product._id) {
            setCurrentProduct(product);
            setUpdatedProduct({
                product: null,
                description: product.description,
                price: product.price
            });
            setModal(true);
        } else {
            console.error('Product ID is undefined');
            setError('Product ID is undefined');
        }
    };


    const updateProduct = async () => {
      try {
          if (!currentProduct || !currentProduct._id || !updatedProduct.description || !updatedProduct.price) {
              throw new Error('Incomplete data for updating product');
          }
  
          const token = localStorage.getItem('token');
          if (!token) {
              throw new Error('No authentication token found');
          }
  
          const productId = currentProduct._id;
          const formData = new FormData();
          if (updatedProduct.product) {
              formData.append('product', updatedProduct.product);
          }
          formData.append('description', updatedProduct.description);
          formData.append('price', updatedProduct.price);
  
          // Log the FormData object to ensure the file is correctly appended
          console.log("FormData:", formData);
  
          const response = await axios.put(
              `https://ecommerce-g1tg.onrender.com/updateproduct/${productId}`,
              formData,
              {
                  headers: {
                      'Authorization': `Bearer ${token}`,
                      'Content-Type': 'multipart/form-data',
                  }
              }
          );
  
          if (response.status === 200) {
              setTableData(prevData =>
                  prevData.map(item => (item._id === productId ? { ...item, description: updatedProduct.description, price: updatedProduct.price } : item))
              );
              setModal(false);
          } else {
              console.error('Error updating product:', response);
              setError('Error updating product. Please try again later.');
          }
      } catch (error) {
          console.error('Error updating product:', error);
          setError(error.message);
      }
  };
  

    return (
        <section>
            <Container>
                <Row>
                    <Col lg="12">
                        {error && <p className="text-danger">{error}</p>}
                        <Table className='table'>
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Title</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map(item => (
                                    <tr key={item._id}>
                                        <td><img src={item.image.url} alt={item.description} width={50} /></td>
                                        <td>{item.description}</td>
                                        <td>{item.price}</td>
                                        <td>
                                            <Button className='btn btn-danger' onClick={() => deleteProduct(item._id)}>Delete</Button>
                                            <Button className='btn btn-success ms-3' onClick={() => openUpdateModal(item)}>Update</Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>

            <Modal isOpen={modal} toggle={() => setModal(!modal)}>
                <ModalHeader toggle={() => setModal(!modal)}>Update Product</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="product">Image</Label>
                            <Input
                                type="file"
                                name="product"
                                id="product"
                                onChange={(e) => setUpdatedProduct({ ...updatedProduct, product: e.target.files[0] })}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="description">Description</Label>
                            <Input
                                type="text"
                                name="description"
                                id="description"
                                value={updatedProduct.description}
                                onChange={(e) => setUpdatedProduct({ ...updatedProduct, description: e.target.value })}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="price">Price</Label>
                            <Input
                                type="number"
                                name="price"
                                id="price"
                                value={updatedProduct.price}
                                onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })}
                            />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={updateProduct}>Update</Button>{' '}
                    <Button color="secondary" onClick={() => setModal(!modal)}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </section>
    );
};

export default AllProduct;
