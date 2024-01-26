import FanLetterForm from "./FanLetterForm";
import FanLetterList from "./FanLetterList";
import MemberCard from "./MemberCard";
import { aespa, fanLetters } from "./data";

function FanLetter() {
  const seletedList = fanLetters.filter((letter) => letter.writedTo === "카리나");

  return (
    <>
      <MemberCard members={aespa} />
      <FanLetterForm members={aespa} />
      <FanLetterList list={seletedList} />
    </>
  );
}

export default FanLetter;
