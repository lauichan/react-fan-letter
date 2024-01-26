import { FanLetterDetailSection } from "./Styles";
import { useParams } from "react-router-dom";
import { fanLetters } from "./data";

function FanLetterDetail() {
  const { id } = useParams();
  const [article] = fanLetters.filter((letter) => letter.id === id);

  return (
    <FanLetterDetailSection>
      <article>
        <img src={article.avatar} alt={article.nickname} />
        <span>{article.nickname}</span>
        <p>{article.content}</p>
      </article>
    </FanLetterDetailSection>
  );
}

export default FanLetterDetail;
