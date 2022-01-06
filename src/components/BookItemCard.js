import React from "react";

export const ItemListData = ({ title, value }) => {
  return (
    <div className="flex">
      <div style={{ minWidth: 100 }}>{title}</div>
      <div className="single-line-text"> {value}</div>
    </div>
  );
};
const BookItemCard = ({
  title,
  author_name,
  coverImage,
  years,
  first_publish_year,
}) => {
  return (
    <div className="book-item-card">
      <div>
        {coverImage ? (
          <img src={coverImage} alt="cover image" className="cover-image" />
        ) : (
          <div
            style={{ height: 300, margin: "5px 0px" }}
            className="flex justify-center items-center border-gray"
          >
            Cover Not Found
          </div>
        )}
      </div>
      <div className="">
        <ItemListData title="Title : " value={title} />
        <ItemListData
          title="Author :"
          value={author_name?.length > 0 && author_name.join()}
        />
        <ItemListData title="First Publish :" value={first_publish_year} />
        {years?.length > 0 && (
          <ItemListData title="Year :" value={years.join()} />
        )}
      </div>
    </div>
  );
};

export default BookItemCard;
