import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import FanLetterForm from "./FanLetterForm";
import {
  ArticleBottomStyle,
  ArticleContentStyle,
  ArticleHeaderStyle,
  ArticleStyle,
  AvatarStyle,
  ButtonStyle,
} from "./Styles";
import { useDispatch, useSelector } from "react-redux";
import { deleteFanLetter, updateFanLetter } from "store/modules/fanletter";
import { selectMember } from "store/modules/member";

// 0000년 00월 00일 월요일
function timeString(date) {
  return new Date(date).toLocaleDateString("ko-kr", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function FanLetterDetail() {
  const { id } = useParams();
  const comments = useSelector((state) => state.fanletter);
  const article = comments.find((letter) => letter.id === id) ?? {};
  const [editMode, setEditMode] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeEditMode = (bool) => {
    setEditMode(bool);
  };

  const handleDeleteBtn = (id) => {
    if (window.confirm("삭제 확인")) {
      dispatch(deleteFanLetter(id));
      navigate("/");
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { name, content, sendto } = e.target;

    const isChanged =
      article &&
      name.value === article.nickname &&
      content.value === article.content &&
      sendto.value === article.writedTo;

    if (isChanged) {
      alert("수정된 내용이 없습니다.");
      return;
    }

    const formData = {
      id: article.id,
      createdAt: new Date().toISOString(),
      avatar: article.avatar,
      nickname: name.value,
      content: content.value,
      writedTo: sendto.value,
    };

    if (!window.confirm("팬레터 수정 확인")) return;

    dispatch(updateFanLetter(formData));
    dispatch(selectMember(formData.writedTo));
    navigate("/");
  };

  if (editMode)
    return (
      <FanLetterForm
        data={article}
        editMode={editMode}
        changeEditMode={changeEditMode}
        handleOnSubmit={handleOnSubmit}
      />
    );

  return (
    <section>
      <ArticleStyle>
        <ArticleHeaderStyle>
          <AvatarStyle src={article.avatar} alt={article.nickname} />
          <span>{article.nickname}</span>
          <time>{timeString(article.createdAt)}</time>
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
