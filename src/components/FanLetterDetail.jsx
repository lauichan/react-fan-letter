import { FanLetterDetailSection } from "./Styles";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useState } from "react";
import FanLetterForm from "./FanLetterForm";
import { FanLetterContext } from "context/FanLetterContext";

function FanLetterDetail() {
  const { comments, updateFanLetter, deleteFanLetter, selectMember } = useContext(FanLetterContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const [editMode, setEditMode] = useState(false);

  const [article] = comments.filter((letter) => letter.id === id);

  const changeEditMode = (bool) => {
    setEditMode(bool);
  };

  const handleDeleteBtn = (id) => {
    if (window.confirm("삭제 확인")) {
      deleteFanLetter(id);
      navigate("/");
    }
  };

  if (editMode)
    return (
      <FanLetterForm
        article={article}
        updateFanLetter={updateFanLetter}
        changeEditMode={changeEditMode}
        selectMember={selectMember}
      />
    );

  return (
    <FanLetterDetailSection>
      <article>
        <div className="meta">
          <span>{article.nickname}</span>
          <time>
            {new Date(article.createdAt).toLocaleDateString("ko-kr", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>
        <p className="content">{article.content}</p>
        <div className="bottom">
          <span>To. {article.writedTo}</span>
          <button onClick={() => changeEditMode(true)}>수정</button>
          <button onClick={() => handleDeleteBtn(article.id)}>삭제</button>
        </div>
      </article>
    </FanLetterDetailSection>
  );
}

export default FanLetterDetail;
