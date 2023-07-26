import React from 'react';

const AddToCartButton = () => {
    return (
        <div className="m-3">
            <button className='block bg-gray-100 hover:bg-gray-200 text-white w-full py-2 px-4 rounded-3xl'>
            <span className='text-blue-700 cursor-pointer'>
            ADD ✅
            </span>

            </button>
        </div>
    );
};

export default AddToCartButton;