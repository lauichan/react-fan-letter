import FanLetterForm from "./FanLetterForm";
import { useState } from "react";
import FanLetterList from "./FanLetterList";
import MemberCard from "./MemberCard";

function FanLetter({ comments, addFanLetter }) {
  const [member, setMember] = useState("카리나");

  const commentList = comments.filter((letter) => letter.writedTo === member);
  const selectMember = (name) => {
    setMember(name);
  };

  return (
    <>
      <MemberCard member={member} selectMember={selectMember} />
      <FanLetterForm addFanLetter={addFanLetter} selectMember={selectMember} />
      <FanLetterList list={commentList} />
    </>
  );
}

export default FanLetter;
