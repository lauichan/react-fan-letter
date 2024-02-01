import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "pages/Home";
import Detail from "pages/Detail";
import { FanLetter } from "context/FanLetterContext";

function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <FanLetter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="detail/:id" element={<Detail />} />
          </Routes>
        </FanLetter>
      </Layout>
    </BrowserRouter>
  );
}

export default Router;
