import FanLetterForm from "components/FanLetterForm";
import FanLetterList from "components/FanLetterList";
import MemberCard from "components/MemberCard";
import { useSelector } from "react-redux";

function Home() {
  const comments = useSelector((state) => state.fanletter);
  const member = useSelector((state) => state.member);
  const commentList = comments.filter((letter) => letter.writedTo === member);

  return (
    <>
      <MemberCard />
      <FanLetterForm />
      <FanLetterList list={commentList} />
    </>
  );
}

export default Home;
