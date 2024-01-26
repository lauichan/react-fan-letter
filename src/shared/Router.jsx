import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "pages/Home";
import Detail from "pages/Detail";
import { fanLetters } from "static/data";
import { useState } from "react";

function Router() {
  const [comments, setComments] = useState(fanLetters);

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
        <Routes>
          <Route path="/" element={<Home comments={comments} addFanLetter={addFanLetter} />} />
          <Route
            path="detail/:id"
            element={
              <Detail
                comments={comments}
                updateFanLetter={updateFanLetter}
                deleteFanLetter={deleteFanLetter}
              />
            }
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default Router;
