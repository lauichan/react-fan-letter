import { FanLetterDetailSection } from "./Styles";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import FanLetterForm from "./FanLetterForm";

function FanLetterDetail({ comments, updateFanLetter, deleteFanLetter }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [editMode, setEditMode] = useState(false);

  const [article] = comments.filter((letter) => letter.id === id);

  const handleUpdateBtn = () => {
    setEditMode(true);
  };

  const handleDeleteBtn = (id) => {
    if (window.confirm("삭제 확인")) deleteFanLetter(id);
    navigate("/");
  };

  if (editMode === true)
    return <FanLetterForm article={article} updateFanLetter={updateFanLetter} />;

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
