import FanLetterForm from "./FanLetterForm";
import FanLetterList from "./FanLetterList";
import MemberCard from "./MemberCard";

export const aespa = [
  { id: "karina", name: "카리나" },
  { id: "winter", name: "윈터" },
  { id: "giselle", name: "지젤" },
  { id: "ningning", name: "닝닝" },
];

export const fanLetters = [
  { id: "123", sendto: "karina", name: "닉네임", content: "안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요" },
  { id: "456", sendto: "karina", name: "닉네임", content: "안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요" },
  { id: "789", sendto: "winter", name: "닉네임", content: "안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요" },
];

function FanLetter() {
  return (
    <>
      <MemberCard members={aespa} />
      <FanLetterForm members={aespa} />
      <FanLetterList list={fanLetters} />
    </>
  );
}

export default FanLetter;
