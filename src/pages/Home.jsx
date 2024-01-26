import FanLetter from "components/FanLetter";

function Home({ comments, addFanLetter }) {
  return <FanLetter comments={comments} addFanLetter={addFanLetter} />;
}

export default Home;
