import FanLetterForm from "./FanLetterForm";
import FanLetterList from "./FanLetterList";
import MemberCard from "./MemberCard";

function FanLetter({ member, comments, addFanLetter, selectMember }) {
  const commentList = comments.filter((letter) => letter.writedTo === member);

  return (
    <>
      <MemberCard member={member} selectMember={selectMember} />
      <FanLetterForm addFanLetter={addFanLetter} selectMember={selectMember} />
      <FanLetterList list={commentList} />
    </>
  );
}

export default FanLetter;
