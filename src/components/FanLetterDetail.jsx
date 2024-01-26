import FanLetterForm from "./FanLetterForm";
import { FanLetterDetailSection } from "./Styles";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

function FanLetterDetail({ comments, updateFanLetter, deleteFanLetter }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [edit, setEdit] = useState(false);

  const [article] = comments.filter((letter) => letter.id === id);

  const handleUpdateBtn = () => {
    setEdit(true);
  };

  const handleDeleteBtn = (id) => {
    deleteFanLetter(id);
    navigate("/");
  };

  if (edit === true) return <FanLetterForm />;

  return (
    <FanLetterDetailSection>
      <article>
        <img src={article.avatar} alt={article.nickname} />
        <span>{article.nickname}</span>
        <p>{article.content}</p>
        <button onClick={handleUpdateBtn}>수정</button>
        <button onClick={() => handleDeleteBtn(article.id)}>삭제</button>
      </article>
    </FanLetterDetailSection>
  );
}

export default FanLetterDetail;
