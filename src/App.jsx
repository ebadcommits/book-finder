import {useState, useEffect} from "react"
import Loader from "./components/loader"
import BookList from "./components/booklist"
import ErrorMessage from "./components/errormessage"


function App() {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    async function fetchBook(){
      try{

        setLoading(true)
        setError("")

        const res = await fetch("https://openlibrary.org/search.json?q=harry+potter")
        if(!res){
          throw new Error("Failed to fetch books")
        }
        
        const data = await res.json()
        setBooks(data.docs)
      }
      catch(err){
        setError(err.message)
      }
      finally{
        setLoading(false)
      }
    }

    fetchBook()
  }, [])

  return (
    <div className="p-6 max-w-5x1 mx-auto">
      {loading && <Loader/>}
      {error && <ErrorMessage message={error}/>}
      {!loading && !error && books.length === 0 && (
        <p className="text-gray-600 text-center nt-10">N0 books found</p>
      )}
      {!loading && !error && books.length > 0 &&(
        <BookList books={books}/>
      )}
    </div>
  );
}

export default App;