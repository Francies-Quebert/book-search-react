import "./App.css";
import SearchInput from "./components/SearchInput";
import { useEffect, useState } from "react";
import SearchButton from "./components/SearchButton";
import { fetchBookData } from "./services/bookData";
import BookItemCard from "./components/BookItemCard";
import { Fragment } from "react/cjs/react.production.min";
function App() {
  const [value, setValue] = useState(""); //input value stored here
  const [bookData, setBookData] = useState({ data: [], loading: false }); //books data stored here

  //on input change function
  const onSearchChange = (book) => {
    setValue(book);
  };
  //on button click function wih fetch and validation
  const onSearchClick = async () => {
    setBookData((pData) => ({
      ...pData,
      loading: true,
    }));
    const tempData = await fetchBookData(value)
      .then((data) => {
        if (!data || data.length <= 0) {
          throw new Error("no data found");
        } else {
          return data;
        }
      })
      .catch((err) => {
        setBookData(() => ({
          data: [],
          loading: false,
        }));
        alert(err + ", Something went wrong! Try again later");
      });

    setBookData((pData) => ({
      ...pData,
      data: tempData,
      loading: false,
    }));
  };
  // landing page
  return (
    <div className="App">
      <header className="App-header">Landing Page</header>
      <div className="flex justify-center items-center">
        <div style={{}} className="">
          {/* search input component */}
          <SearchInput
            onSearch={(e) => onSearchChange(e.target.value)}
            searchValue={value}
            placeholder="Enter the book you want to search"
          />
        </div>
        <div>
          {/* search button component */}
          <SearchButton
            disabled={value?.length > 0 ? false : true}
            onSearchClick={() => {
              onSearchClick();
            }}
          />
        </div>
      </div>
      <div className="m-10 ">
        {/* book data to be viewed and loading component */}
        {bookData?.loading ? (
          "loading"
        ) : (
          <div className="flex card-cantainer">
            {bookData?.data?.length > 0 ? (
              bookData.data.map((book) => {
                return (
                  <Fragment key={book.key}>
                    <BookItemCard
                      title={book.title}
                      author_name={book.author_name}
                      coverImage={
                        book.cover_i
                          ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
                          : null
                      }
                      years={book.publish_year}
                      first_publish_year={book.first_publish_year}
                    />
                  </Fragment>
                );
              })
            ) : (
              <div>No Data</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
