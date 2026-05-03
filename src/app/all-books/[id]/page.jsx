import Image from 'next/image';
import React from 'react';

const BookDetailsPage =async ({params}) => {
    const {id} = await params;

    const res = await fetch('https://assignment-8-orpin-eight.vercel.app/data.json');
    const books = await res.json();
    const book = books.find(book => book.id == id);
    console.log(book)
    
    return (
        <div>
            <h1>Book Details.</h1>
            <div>
                <p>{book.title}</p>
                <Image width={500} height={500} src={book.image_url} alt={book.title} />
                <p>{book.image_url}</p>
            </div>
        </div>
    );
};
    
    
export default BookDetailsPage;