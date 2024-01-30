import FanLetterForm from "components/FanLetterForm";
import FanLetterList from "components/FanLetterList";
import MemberCard from "components/MemberCard";
import { FanLetterContext } from "context/FanLetterContext";
import { useContext } from "react";

function Home() {
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

export default Home;
