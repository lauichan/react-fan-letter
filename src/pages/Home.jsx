import FanLetter from "components/FanLetter";

function Home({ member, comments, addFanLetter, selectMember }) {
  return (
    <FanLetter
      member={member}
      comments={comments}
      addFanLetter={addFanLetter}
      selectMember={selectMember}
    />
  );
}

export default Home;
