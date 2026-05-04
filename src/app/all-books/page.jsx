'use client';

import BookCard from "@/Components/BookCard";
import { Button, SearchField } from "@heroui/react";
import { useEffect, useState } from "react";


const AllBooksPage = () => {
    const [books, setBooks] = useState([]);
    const [activeBooks, setActiveBooks] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const res = await fetch('https://assignment-8-orpin-eight.vercel.app/data.json');
                if (!res.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data = await res.json();
                setBooks(data);
                setActiveBooks(data)
            } catch (error) {
                console.error("Error:", error.message);
            }
        };
        fetchBooks();
    }, []);
    
    console.log(books)

    const handleClean = () => {
        setSearch('');
        setActiveBooks(books)
    }
    
    const handleSearch = (e) => {
        e.preventDefault();
        console.log(search);
        const searchBooks = books.filter(book =>
            book.title.toLowerCase().includes(search.toLowerCase())
        );
        setActiveBooks(searchBooks);
        console.log(activeBooks);
        console.log(searchBooks);

    };

    return (
        <div>
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold m-4">All Books</h1>

                <form onSubmit={handleSearch} className="flex gap-2">
                    <SearchField aria-label="Search books">
                        <SearchField.Group className="bg-blue-400/20">
                            <SearchField.SearchIcon />
                            
                            <SearchField.Input
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-70"
                                placeholder="Search..."
                            />
                
                            <SearchField.ClearButton onClick={handleClean} />
                        </SearchField.Group>
                
                    </SearchField>
                        <Button type="submit">Search</Button>
                </form>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {activeBooks.map(book => <BookCard key={book.id} book={book} />)}
            </div>
        </div>
    );
};

export default AllBooksPage;