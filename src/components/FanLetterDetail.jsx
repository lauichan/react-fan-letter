import { FanLetterDetailSection } from "./Styles";
import { fanLetters } from "./FanLetter";
import { useParams } from "react-router-dom";

function FanLetterDetail() {
  const { id } = useParams();
  const [article] = fanLetters.filter((letter) => letter.id === id);
  console.log(article);

  return (
    <FanLetterDetailSection>
      <article>
        <span>{article.name}</span>
        <p>{article.content}</p>
      </article>
    </FanLetterDetailSection>
  );
}

export default FanLetterDetail;
