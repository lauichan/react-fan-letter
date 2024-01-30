import { useContext } from "react";
import FanLetterForm from "./FanLetterForm";
import FanLetterList from "./FanLetterList";
import MemberCard from "./MemberCard";
import { FanLetterContext } from "context/FanLetterContext";

function FanLetter() {
  const { comments, member } = useContext(FanLetterContext);
  const commentList = comments.filter((letter) => letter.writedTo === member);

  return (
    <>
      <MemberCard />
      <FanLetterForm />
      <FanLetterList list={commentList} />
    </>
  );
}

export default FanLetter;
