import { useNavigate, useParams } from "react-router-dom";
import { useContext, useState } from "react";
import FanLetterForm from "./FanLetterForm";
import { FanLetterContext } from "context/FanLetterContext";
import {
  ArticleBottomStyle,
  ArticleContentStyle,
  ArticleHeaderStyle,
  ArticleStyle,
  ButtonStyle,
} from "./Styles";

function FanLetterDetail() {
  const { comments, updateFanLetter, deleteFanLetter, selectMember } = useContext(FanLetterContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const [editMode, setEditMode] = useState(false);

  const article = comments.find((letter) => letter.id === id) ?? {};

  const changeEditMode = (bool) => {
    setEditMode(bool);
  };

  const handleDeleteBtn = (id) => {
    if (window.confirm("삭제 확인")) {
      deleteFanLetter(id);
      navigate("/");
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const { name, content, sendto } = e.target;

    const isUnchanged =
      name.value === article.nickname &&
      content.value === article.content &&
      sendto.value === article.writedTo;

    if (isUnchanged) {
      alert("수정된 내용이 없습니다.");
      return;
    }

    const formData = {
      id: article.id,
      createdAt: article.createdAt,
      avatar: article.avatar,
      nickname: name.value,
      content: content.value,
      writedTo: sendto.value,
    };

    updateFanLetter(formData);
    selectMember(formData.writedTo);
    navigate("/");
  };

  if (editMode)
    return (
      <FanLetterForm
        data={article}
        handleOnSubmit={handleOnSubmit}
        editMode={editMode}
        changeEditMode={changeEditMode}
      />
    );

  return (
    <section>
      <ArticleStyle>
        <ArticleHeaderStyle>
          <span>{article.nickname}</span>
          <time>
            {new Date(article.createdAt).toLocaleDateString("ko-kr", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </ArticleHeaderStyle>
        <ArticleContentStyle>{article.content}</ArticleContentStyle>
        <ArticleBottomStyle>
          <span>To. {article.writedTo}</span>
          <ButtonStyle onClick={() => changeEditMode(true)}>수정</ButtonStyle>
          <ButtonStyle onClick={() => handleDeleteBtn(article.id)}>삭제</ButtonStyle>
        </ArticleBottomStyle>
      </ArticleStyle>
    </section>
  );
}

export default FanLetterDetail;
