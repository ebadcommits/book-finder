import {useState, useEffect} from "react"
import Loader from "./components/loader"
import BookList from "./components/booklist"
import ErrorMessage from "./components/errormessage"
import SearchBar from "./components/searchbar"
import SectionTitle from "./components/ui/sectiontitle"
import Container from "./components/ui/container"



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
        if(!res.ok) throw new Error("Failed to fetch books")
        
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
    <Container className="p-6 max-w-5x1 mx-auto">

      <SectionTitle>Book Explorer</SectionTitle>

      <SearchBar query={query} setQuery={setQuery}/>


      {loading && <Loader/>}

      {error && <ErrorMessage message={error}/>}

      {!loading && !error && books.length === 0 && (
        <p className="text-gray-600 text-center nt-10">No books found</p>
      )}

      {!loading && !error && books.length > 0 &&(
        <BookList books={books}/>
      )}

    </Container>
  );
}

export default App;