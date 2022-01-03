import React, { Component } from "react";
import "../App.less";
import { useEffect, useState } from "react";
import Wordcloud from "../components/wordcloud";
import Searchbar from "../components/searchbar";
import Linkcard from "../components/linkcard";
import Mapbox from "../components/Mapbox";

const Gallery = () => {
  const onSearch = (value) => console.log(value);

  const keywords = [
    { id: 1, keyword: "word1" },
    { id: 1, keyword: "word2" },
    { id: 1, keyword: "word3" },
    { id: 1, keyword: "word4" },
    { id: 1, keyword: "word5" },
    { id: 1, keyword: "word6" },
    { id: 1, keyword: "word7" },
    { id: 1, keyword: "word8" },
    { id: 1, keyword: "word9" },
    { id: 1, keyword: "word10" },
    { id: 1, keyword: "word1" },
    { id: 1, keyword: "word2" },
    { id: 1, keyword: "word3" },
    { id: 1, keyword: "word4" },
    { id: 1, keyword: "word5" },
    { id: 1, keyword: "word6" },
    { id: 1, keyword: "word7" },
    { id: 1, keyword: "word8" },
    { id: 1, keyword: "word9" },
    { id: 1, keyword: "word10" },
    { id: 1, keyword: "word1" },
    { id: 1, keyword: "word2" },
    { id: 1, keyword: "word3" },
    { id: 1, keyword: "word4" },
    { id: 1, keyword: "word5" },
    { id: 1, keyword: "word6" },
    { id: 1, keyword: "word7" },
    { id: 1, keyword: "word8" },
    { id: 1, keyword: "word9" },
    { id: 1, keyword: "word10" },
  ];

  return (
    <div className="container-layout">
      <Wordcloud data={keywords}></Wordcloud>
      <Searchbar width="40vw" onSearch={onSearch}></Searchbar>
      {/* <div className="card-container">
        <Linkcard
          title="This is a Title"
          description="A very long description is not being given here, this is just for testing purpose."
          image="https://www.hollywoodreporter.com/wp-content/uploads/2021/10/Man-of-Steel-Everett-H-2021.jpg"
          marginRight="1vh"
        ></Linkcard>
      </div> */}
      <Mapbox></Mapbox>
    </div>
  );
};

export default Gallery;
