import FanLetterForm from "components/FanLetterForm";
import FanLetterList from "components/FanLetterList";
import MemberCard from "components/MemberCard";

function Home({ member, comments, addFanLetter, selectMember }) {
  const commentList = comments.filter((letter) => letter.writedTo === member);

  return (
    <>
      <MemberCard member={member} selectMember={selectMember} />
      <FanLetterForm addFanLetter={addFanLetter} selectMember={selectMember} />
      <FanLetterList list={commentList} />
    </>
  );
}

export default Home;
