import {useState, useEffect} from "react"
import Loader from "./components/loader"
import BookList from "./components/booklist"
import ErrorMessage from "./components/errormessage"
import SearchBar from "./components/searchbar"


function App() {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [query, setQuery] = useState("harry potter")

  useEffect(() => {
    if(!query.trim()){
      setBooks([])
      return
     }
    
     async function fetchBook(){
      try{
        setLoading(true)
        setError("")

        const res = await fetch(`https://openlibrary.org/search.json?q=${query}`)
        if(!res) throw new Error("Failed to fetch books")
        
        const data = await res.json()
        setBooks(data.docs || [])
      }
      catch(err){
        setError(err.message)
      }
      finally{
        setLoading(false)
      }
    }

    fetchBook()
  }, [query])

  return (
    <div className="p-6 max-w-5x1 mx-auto">

      <SearchBar query={query} setQuery={setQuery}/>

      <h1 className="text-3xl text-center font-bold mb-6">Book Explorer</h1>


      {loading && <Loader/>}

      {error && <ErrorMessage message={error}/>}

      {!loading && !error && books.length === 0 && (
        <p className="text-gray-600 text-center nt-10">No books found</p>
      )}

      {!loading && !error && books.length > 0 &&(
        <BookList books={books}/>
      )}

    </div>
  );
}

export default App;