import Card from "./ui/card"

function BookItem({book}){
    return(
        <Card >
            <h2 className="text-lg font-semibold">{book.title}</h2>
            <p className="text-gray-600 text-sm mt-1">{book.author_name?.[0] || "unknown Author"}</p>
            <p className="text-xs mt-2 text-gray-500">First Publish: {book.first_publish_year || "N/A"}</p>
        </Card>
    )
}

export default BookItem