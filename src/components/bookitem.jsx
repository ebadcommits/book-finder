function BookItem({book}){
    return(
        <div className="p-4 bg-white rounded-x1 shadow hover:shadow-lg transition">
            <h2 className="text-lg font-bold">{book.title}</h2>
            <p className="text-gray-600">{book.author_name ? book.author_name[0] : "unknown Author"}</p>
            <p className="text-sm text-gray-500">Year: {book.publish_year ?? "N/A"}</p>
        </div>
    )
}

export default BookItem