import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const All = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://inshorts.deta.dev/news?category=science")
      //axios.get("https://inshorts.deta.dev/news?category=science")
      .then((response) => response.json())
      .then((data) => {
        console.log("data: ", data);
        // const poste = { ...data.results[0] };
        // setPosts((oldPosteArray) => [...oldPosteArray, poste]);
        setPosts(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function renderPosts(poste, index) {
    console.log("POST: ", poste);
    return (
      <div
        style={{
          marginBottom: "20px"
        }}
        key={index}
      >
        <div>{poste.author}</div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }
  return (
    <>
      <div>
        {posts.map((poste, index) => {
          return renderPosts(poste, index);
        })}
      </div>
      <button onClick={() => navigate("secondFile")}>
        Click here for more info
      </button>
    </>
  );
};

export default All;
