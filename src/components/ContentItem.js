import React from "react";

function Content({ quote }) {
  return (
    <>
      <div className="col-md-4">
        <div className="card mb-3" id="card">
          {/* <div className="card-header">
            <img
              src="https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_1280.png"
              alt=""
              className="img-thumbnail text-center"
            />
          </div> */}
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <p>{quote.quote}</p>
              <footer className="blockquote-footer">
                Author <cite title="Source Title">{quote.author}</cite>
              </footer>
            </blockquote>
          </div>
          <p className="text-center">
            {quote.topics.map((topic) => {
              return <span>{topic},</span>;
            })}
          </p>
        </div>
      </div>
    </>
  );
}

export default Content;
