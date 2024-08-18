import "./App.css";
import BookList from "./components/BookList";
import Counter from "./components/Counter";
import books from "./components/challanges/bookData";

const App = () => {
  return (
    <div className="App">
      <Counter />
      <BookList books={books} />
    </div>
  );
};

export default App;
