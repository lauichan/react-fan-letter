import { useState } from "react";
import FanLetterForm from "./FanLetterForm";
import FanLetterList from "./FanLetterList";
import MemberCard from "./MemberCard";
import { aespa, fanLetters } from "./data";

function FanLetter() {
  const [member, setMember] = useState("카리나");
  const [comments, setComments] = useState(fanLetters);

  const selectedList = (member) => {
    return comments.filter((letter) => letter.writedTo === member);
  };

  const viewListByMember = (name) => {
    setMember(name);
  };

  const addFanLetter = (newComment) => {
    setComments((prev) => [...prev, newComment]);
    setMember(newComment.writedTo);
  };

  return (
    <>
      <MemberCard members={aespa} selectMember={viewListByMember} />
      <FanLetterForm members={aespa} addFanLetter={addFanLetter} />
      <FanLetterList list={selectedList(member)} />
    </>
  );
}

export default FanLetter;
