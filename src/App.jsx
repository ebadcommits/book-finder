import {useState, useEffect} from "react"
import Loader from "./components/loader"
import BookList from "./components/booklist"



function App() {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchBook(){
      try{
        const res = await fetch("https://openlibrary.org/search.json?q=harry+potter")
        const data = await res.json()
        setBooks(data.docs)
      }
      catch(err){
        console.log("error fetching books:", err)
      }
      finally{
        setLoading(false)
      }
    }

    fetchBook()
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      { loading ? <Loader/> : <BookList books={books} /> }
    </div>
  );
}

export default App;