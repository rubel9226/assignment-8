import React from 'react';

const FeaturedBooks =async () => {
    const res = await fetch('https://assignment-8-orpin-eight.vercel.app/data.json');
    const books = await res.json();
    console.log(books);
    return (
        <div>
            
        </div>
    );
};

export default FeaturedBooks;