import BookItem from "./bookitem"


function BookList({books}){
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {books.map((book) => (
                <BookItem key={book.key} book={book}/>
            ))}
        </div>
    )
}

export default BookList