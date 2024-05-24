import React, { useState, useEffect } from 'react';

// Reusable StarRating component
const StarRating = ({ rating }) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        stars.push(
            <span key={i} className={i <= rating ? 'star-filled' : 'star-empty'}>&#9733;</span>
        );
    }
    return (
        <div className="star-rating">
            {stars}
        </div>
    );
};

const CustomerReviews = () => {
    const [reviews, setReviews] = useState([]);
    const [newReview, setNewReview] = useState({ name: '', rating: 5, comment: '', images: [] });

    useEffect(() => {
        // Fetch reviews from an API or database
        const dummyReviews = [
            { id: 1, name: 'John Doe', rating: 4, comment: 'Great product! Highly recommended.', images: [] },
            { id: 2, name: 'Jane Smith', rating: 5, comment: 'Excellent service and fast shipping.', images: [] },
            { id: 3, name: 'Alice Johnson', rating: 3, comment: 'Product was okay, could be better.', images: [] }
        ];
        setReviews(dummyReviews);
    }, []);

    const handleChange = (e) => {
        if (e.target.name === 'images') {
            const files = Array.from(e.target.files);
            const newImages = files.map(file => ({
                file,
                preview: URL.createObjectURL(file)
            }));
            setNewReview({ ...newReview, images: newReview.images.concat(newImages) });
        } else {
            const { name, value } = e.target;
            setNewReview({ ...newReview, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = reviews.length + 1;
        setReviews([...reviews, { ...newReview, id }]);
        setNewReview({ name: '', rating: 5, comment: '', images: [] });
    };

    // Calculate the percentage of reviews for each star rating category
    const calculatePercentage = (rating) => {
        const totalReviews = reviews.length;
        const ratingCount = reviews.filter(review => review.rating === rating).length;
        return totalReviews ? ((ratingCount / totalReviews) * 100).toFixed(2) : 0;
    };

    return (
        <div className="container">
            <h2 className="mt-5 mb-4">Customer Reviews</h2>
            <div className="row">
                {reviews.map(review => (
                    <div key={review.id} className="col-md-4 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title">{review.name}</h3>
                                <StarRating rating={review.rating} />
                                <p className="card-text mt-3">{review.comment}</p>
                                <div className="card-images">
                                    {review.images.map((image, index) => (
                                        <img
                                            key={index}
                                            src={image.preview}
                                            alt="Customer"
                                            className="img-fluid mb-2"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <h3 className="mt-5 mb-4">Add Your Review</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Your Name:</label>
                    <input type="text" id="name" name="name" value={newReview.name} onChange={handleChange} className="form-control" required />
                </div>
                <div className="form-group">
                    <label htmlFor="rating">Rating:</label>
                    <select id="rating" name="rating" value={newReview.rating} onChange={handleChange} className="form-control">
                        {[1, 2, 3, 4, 5].map(rating => (
                            <option key={rating} value={rating}>{rating}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="comment">Your Comment:</label>
                    <textarea id="comment" name="comment" value={newReview.comment} onChange={handleChange} required className="form-control"></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="images">Upload Images:</label>
                    <input type="file" id="images" name="images" onChange={handleChange} accept="image/*" multiple className="form-control-file" />
                </div>
                <div className="image-previews">
                    {newReview.images.map((image, index) => (
                        <img key={index} src={image.preview} alt="Preview" className="img-thumbnail mr-2 mt-2" />
                    ))}
                </div>
                <button type="submit" className="btn btn-primary mt-3">Submit Review</button>
            </form>

            {/* Display review percentage for each star rating category */}
            <div className="review-percentages mt-5 my-5 pb-5 py-5 mb-5">
                <h3>Review Percentages</h3>
                <ul>
                    <li><span className="star-filled">&#9733;</span> 5 Stars: {calculatePercentage(5)}%</li>
                    <li><span className="star-filled">&#9733;</span> 4 Stars: {calculatePercentage(4)}%</li>
                    <li><span className="star-filled">&#9733;</span> 3 Stars: {calculatePercentage(3)}%</li>
                    <li><span className="star-filled">&#9733;</span> 2 Stars: {calculatePercentage(2)}%</li>
                    <li><span className="star-filled">&#9733;</span> 1 Star: {calculatePercentage(1)}%</li>
                </ul>
            </div>
        </div>
    );
};

export default CustomerReviews;
