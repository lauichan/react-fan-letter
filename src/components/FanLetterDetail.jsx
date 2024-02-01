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

function FanLetterDetail({ article, handleDeleteBtn, changeEditMode }) {
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
