import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getAllBook, searchByName } from "./book.slice";
import style from './style.module.css';
import { IBook } from "./types";
import { Modal } from "../../utils/book.modal";

export const Books = () => {
    const book = useAppSelector(state => state.book);
    const dispatch = useAppDispatch();
    const search = useAppSelector(state => state.search);
    const [selectedBook, setSelectedBook] = useState<IBook | null>(null);
    const [isModalOpen, setModalOpen] = useState(false); 

    useEffect(() => {
        dispatch(getAllBook());
    }, []);

    const filterBook = book.filter((item: IBook) =>
        item.title.toLowerCase().includes((search || "").toLowerCase())
    );

    const handleImageClick = (book: IBook) => {
        setSelectedBook(book); 
        setModalOpen(true); 
    };

    const handleCloseModal = () => {
        setModalOpen(false); 
        setSelectedBook(null);
    };

    return (
        <>
            <h3>BookShop</h3>
            <div>
                <input
                    type="text"
                    placeholder="Search book..."
                    value={search}
                    onChange={e => dispatch(searchByName(e.target.value))}
                />
            </div>
            <div className={style.bookContainer}>
                {filterBook.map(books => (
                    <div
                        className={style.bookCard}
                        key={books.id}
                        onClick={() => handleImageClick(books)} 
                    >
                        <img src={books.photo} alt={books.title} />
                        <div className="bookDetails">
                            <p>
                                <span>Title:</span> {books.title} by {books.author}
                            </p>
                            <strong>{books.price} USD</strong>
                            <button>Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>

            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                {selectedBook && (
                    <div>
                        <img src={selectedBook.photo} alt={selectedBook.title} />
                        <p><strong>Title:</strong> {selectedBook.title}</p>
                        <p><strong>Author:</strong> {selectedBook.author}</p>
                        <p><strong>Price:</strong> {selectedBook.price} USD</p>
                    </div>
                )}
            </Modal>
        </>
    );
};
