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
import { deleteFanLetter } from "store/modules/fanletter";

function FanLetterDetail() {
  const comments = useSelector((state) => state.fanletter);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [editMode, setEditMode] = useState(false);

  const [article] = comments.filter((letter) => letter.id === id);

  const changeEditMode = (bool) => {
    setEditMode(bool);
  };

  const handleDeleteBtn = (id) => {
    if (window.confirm("삭제 확인")) {
      dispatch(deleteFanLetter(id));
      navigate("/");
    }
  };

  if (editMode) return <FanLetterForm article={article} changeEditMode={changeEditMode} />;

  return (
    <section>
      <ArticleStyle>
        <ArticleHeaderStyle>
          <AvatarStyle src={article.avatar} alt={article.nickname} />
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
