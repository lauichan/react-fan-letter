import FanLetterForm from "./FanLetterForm";
import { useState } from "react";
import FanLetterList from "./FanLetterList";
import MemberCard from "./MemberCard";
import { aespa } from "static/data";

function FanLetter({ comments, addFanLetter }) {
  const [member, setMember] = useState("카리나");

  const selectedList = (member) => {
    return comments.filter((letter) => letter.writedTo === member);
  };

  const viewListByMember = (name) => {
    setMember(name);
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
