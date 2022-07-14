import React from "react";
import Content from "./ContentItem";
import quotes from "../utils";
function ContentBox() {
  return (
    <>
      <h1 className="text-center">Daily Quotes</h1>
      <p className="text-center">
        <i class="fa-solid fa-book-open-reader text-info"></i>
      </p>
      <div className="row container my-4 mx-4">
        {quotes.map((quote) => (
          <Content quote={quote} />
        ))}
      </div>
    </>
  );
}

export default ContentBox;
