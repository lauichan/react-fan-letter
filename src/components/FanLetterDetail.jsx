import { deleteFanLetter } from "store/modules/fanletter";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  ArticleBottomStyle,
  ArticleContentStyle,
  ArticleHeaderStyle,
  ArticleStyle,
  AvatarStyle,
  ButtonStyle,
} from "./Styles";

// 0000년 00월 00일 월요일
function timeString(date) {
  return new Date(date).toLocaleDateString("ko-kr", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function FanLetterDetail({ article, changeEditMode }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDeleteBtn = (id) => {
    if (window.confirm("삭제 확인")) {
      dispatch(deleteFanLetter(id));
      navigate("/");
    }
  };

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
