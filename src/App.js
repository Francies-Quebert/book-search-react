import logo from "./logo.svg";
import "./App.css";
import SearchInput from "./components/SearchInput";
import { useState } from "react";
import SearchButton from "./components/SearchButton";
import { fetchBookData } from "./services/bookData";
function App() {
  const [value, setValue] = useState("");
  const [bookData, setBookData] = useState({ data: [], loading: false });

  const onSearchChange = (book) => {
    setValue(book);
  };

  return (
    <div className="App">
      <header className="App-header">Landing Page</header>
      <div className="flex justify-center items-center">
        <div style={{}} className="">
          <SearchInput
            onSearch={(e) => onSearchChange(e.target.value)}
            searchValue={value}
            placeholder="Enter the book you want to search"
          />
        </div>
        <div>
          <SearchButton
            onSearchClick={() => {
              setBookData((pData) => ({
                ...pData,
                loading: true,
              }));
              fetchBookData(value).then((data) => {
                if (data.length <= 0) {
                  setBookData((pData) => ({
                    ...pData,
                    loading: true,
                  }));
                  console.log("Try again later");
                } else {
                  setBookData((pData) => ({
                    ...pData,
                    data: data,
                    loading: false,
                  }));
                }
              });
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
