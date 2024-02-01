import FanLetterForm from "components/FanLetterForm";
import FanLetterList from "components/FanLetterList";
import MemberCard from "components/MemberCard";
import { FanLetterContext } from "context/FanLetterContext";
import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";

function Home() {
  const { comments, member } = useContext(FanLetterContext);
  const commentList = comments.filter((letter) => letter.writedTo === member);

  const { addFanLetter, selectMember } = useContext(FanLetterContext);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const { name, content, sendto } = e.target;

    const formData = {
      id: uuidv4(),
      createdAt: new Date().toISOString(),
      avatar: "https://t1.kakaocdn.net/together_image/common/avatar/avatar.png",
      nickname: name.value,
      content: content.value,
      writedTo: sendto.value,
    };

    addFanLetter(formData);
    selectMember(formData.writedTo);
    e.target.reset();
  };

  return (
    <>
      <MemberCard />
      <FanLetterForm handleOnSubmit={handleOnSubmit} />
      <FanLetterList list={commentList} />
    </>
  );
}

export default Home;
