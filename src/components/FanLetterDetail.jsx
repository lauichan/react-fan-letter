import { FanLetterDetailSection } from "./Styles";
import { useParams } from "react-router-dom";
import { fanLetters } from "./data";
import { useState } from "react";

function FanLetterDetail() {
  const { id } = useParams();
  const [comments, setComments] = useState(fanLetters);
  const [article] = comments.filter((letter) => letter.id === id);

  return (
    <FanLetterDetailSection>
      <article>
        <img src={article.avatar} alt={article.nickname} />
        <span>{article.nickname}</span>
        <p>{article.content}</p>
        <button>수정</button>
        <button>삭제</button>
      </article>
    </FanLetterDetailSection>
  );
}

export default FanLetterDetail;
