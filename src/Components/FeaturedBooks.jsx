import React from 'react';
import BookCard from './BookCard';

const FeaturedBooks =async () => {
    const res = await fetch('https://assignment-8-orpin-eight.vercel.app/data.json');
    const books = await res.json();
    
    const topBooks = books.slice(0,4)
    console.log(topBooks);

    return (
        <div>
           <h1 className='text-2xl font-bold mt-5'>Top Generations</h1> 
           <div className='grid grid-cols-4 gap-5'>
            {
                topBooks.map(book => <BookCard key={book.id} book={book} />)
            }
           </div>
        </div>
    );
};

export default FeaturedBooks;