import { useNavigate } from "react-router-dom";
import { FanLetterFormSection } from "./Styles";
import { aespa } from "static/data";
import { v4 as uuidv4 } from "uuid";

function FanLetterForm({ addFanLetter, updateFanLetter, selectMember, article, changeEditMode }) {
  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const { name, content, sendto } = e.target;

    if (
      article &&
      content.name === article.nickname &&
      content.sendto === article.writedTo &&
      content.value === article.content
    ) {
      alert("수정된 내용이 없습니다.");
      return;
    }

    const formData = {
      id: article ? article.id : uuidv4(),
      createdAt: article ? article.createdAt : new Date().toISOString(),
      avatar: article
        ? article.avatar
        : "https://t1.kakaocdn.net/together_image/common/avatar/avatar.png",
      nickname: name.value,
      content: content.value,
      writedTo: sendto.value,
    };

    article ? updateFanLetter(formData) : addFanLetter(formData);
    selectMember(formData.writedTo);
    e.target.reset();
    navigate("/");
  };

  return (
    <FanLetterFormSection>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          name="name"
          placeholder="닉네임"
          defaultValue={article && article.nickname}
          maxLength={30}
          required
        ></input>
        <textarea
          name="content"
          placeholder="내용"
          defaultValue={article && article.content}
          maxLength={300}
          required
        ></textarea>
        <div>
          To.
          <select name="sendto" title="sendto" required>
            <option defaultValue={article && article.writedTo}>
              {article && article.writedTo}
            </option>
            {aespa.map(({ id, name }) => {
              return (
                <option key={id} value={name}>
                  {name}
                </option>
              );
            })}
          </select>
          {article && (
            <button type="button" onClick={() => changeEditMode(false)}>
              취소
            </button>
          )}
          <button type="submit">팬레터 {article ? "수정" : "등록"}</button>
        </div>
      </form>
    </FanLetterFormSection>
  );
}

export default FanLetterForm;
