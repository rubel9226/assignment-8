'use client'

import { authClient } from '@/lib/auth.client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const BookDetailsPage = ({params}) => {
    const [book, setBook] = useState();
    const router = useRouter();

    const userData = authClient.useSession()
    const user = userData?.data?.user;
    const isLoading = userData?.isPending;

    useEffect(() => {
        if (isLoading) return;
        
        if(!user){
            router.push('/');
        }
    }, [user, isLoading, router]);
    




    useEffect(() => {
        const fetchBooks = async () => {
            const {id} = await params;
            try {
                const res = await fetch('https://assignment-8-orpin-eight.vercel.app/data.json');
                if (!res.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data = await res.json();
                const bookData = data.find(book => book.id == id)
                setBook(bookData);
            } catch (error) {
                console.error("Error:", error.message);
            }
        };
        fetchBooks();
    }, [params]);

    const handleBorrow = () => {
        if (!user) {
            toast.error("Please login first!");
            router.push("/login");
            return;
        }

        toast.success("Book borrowed successfully!");
        console.log("Borrowed:", book);
    };
    
    console.log(book)
    
    if(isLoading){
        return (
            <div>
                Loading ....
            </div>
        )
    }
    return (
        <div className="flex flex-col md:flex-row gap-6 p-6 border rounded-xl shadow-md bg-white">

            {/* Left: Image */}
            <div className="md:w-1/3 w-48 h-64 flex justify-center">
                <Image
                    src={book?.image_url}
                    alt={book?.name}
                    className="w-48 h-64 object-cover rounded-lg shadow"
                    width={192}
                    height={256}
                />
            </div>

            {/* Right: Details */}
            <div className="md:w-2/3 flex flex-col justify-between gap-3">

                <div>
                    <h1 className="text-2xl font-bold">{book?.name}</h1>
                    <p className="text-gray-600">Author: {book?.author}</p>

                    <p className="mt-3 text-gray-700">
                        {book?.description}
                    </p>

                    <p className="mt-2 font-semibold text-green-600">
                        {book?.quantity} copies left
                    </p>
                </div>

                {/* Button */}
                <button
                    onClick={handleBorrow}
                    className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition"
                >
                    Borrow This Book
                </button>
            </div>
        </div>
    );
};
    
    
export default BookDetailsPage;