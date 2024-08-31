import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const RatingModal = ({ order, onClose, onSubmit }) => {
  const [ratings, setRatings] = useState({});
  const [feedback, setFeedback] = useState('');

  const handleRating = (productId, rating) => {
    setRatings(prev => ({ ...prev, [productId]: rating }));
  };

  const handleSubmit = () => {
    onSubmit({ ratings, feedback });
  };

  // Safely split the products string or use an empty array if it's undefined
  const products = order.products ? order.products.split(', ') : [];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white p-6 rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] flex flex-col"
      >
        <h2 className="text-2xl font-bold mb-4">Rate Products</h2>
        {products.length === 0 ? (
          <p>No products found for this order.</p>
        ) : (
          <ul className="overflow-y-auto flex-grow">
            {products.map((product, index) => (
              <li key={index} className="mb-4">
                <p className="font-semibold">{product}</p>
                <div className="flex mt-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={24}
                      className={`cursor-pointer transition-colors duration-200 ${
                        star <= (ratings[index] || 0) ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                      onClick={() => handleRating(index, star)}
                    />
                  ))}
                </div>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-6">
          <label htmlFor="feedback" className="block text-sm font-medium text-gray-700">
            Additional Feedback
          </label>
          <textarea
            id="feedback"
            rows="3"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Please share any additional feedback about your order..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          ></textarea>
        </div>
        <div className="flex justify-end mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors duration-300"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
            disabled={products.length === 0}
          >
            Submit Ratings
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default RatingModal;