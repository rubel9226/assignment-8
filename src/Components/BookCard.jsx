'use client';


import { authClient } from '@/lib/auth.client';
import { Button, Card, Chip, Separator } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaLayerGroup } from 'react-icons/fa';

const BookCard = ({book}) => {
    const userData = authClient.useSession()
    const user = userData?.data?.user;
    
    return (
        <Card className='border rounded-xl'>
            <div className='relative w-full aspect-square'>
                <Image 
                    src={book.image_url}
                    fill
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    alt={book.title}
                    className='object-cover rounded-xl'
                 />
            </div>
            <div>
                <h2 className='font-medium'>{book.title}</h2>
            </div>
            <div className='flex justify-between font-medium'>
                <Chip className='flex gap-1 items-center'><FaLayerGroup /> {book.category}</Chip>

                <Separator orientation='vertical' />

                <Chip color="success">
                    {/* <BiCheck width={12} /> */}
                    <Chip.Label>Available: {book.available_quantity} </Chip.Label>
                </Chip>
                {/* <Chip className=''>Quantity: {book.available_quantity}</Chip> */}

            </div>

            {/* <Link href={`/all-books/${book.id}`} > */}
            <Link href={user ? `/all-books/${book.id}` : '/login'} >
                <Button variant='outline' className={'w-full'}>View Details</Button>
            </Link>
        </Card>
            
    );
};

export default BookCard;