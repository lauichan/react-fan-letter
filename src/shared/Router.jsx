import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "pages/Home";
import Detail from "pages/Detail";
import { fanLetters } from "static/data";
import { useState } from "react";
import { FanLetterContext } from "context/FanLetterContext";

function Router() {
  const [member, setMember] = useState("카리나");
  const [comments, setComments] = useState(fanLetters);

  const selectMember = (name) => {
    setMember(name);
  };

  const addFanLetter = (newComment) => {
    setComments((prev) => [...prev, newComment]);
  };

  const updateFanLetter = (updated) => {
    setComments((prev) => prev.map((comment) => (comment.id === updated.id ? updated : comment)));
  };

  const deleteFanLetter = (id) => {
    setComments((prev) => prev.filter((comment) => comment.id !== id));
  };

  return (
    <BrowserRouter>
      <Layout>
        <FanLetterContext.Provider
          value={{
            member,
            comments,
            selectMember,
            addFanLetter,
            updateFanLetter,
            deleteFanLetter,
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="detail/:id" element={<Detail />} />
          </Routes>
        </FanLetterContext.Provider>
      </Layout>
    </BrowserRouter>
  );
}

export default Router;
