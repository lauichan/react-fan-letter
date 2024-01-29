import { useNavigate } from "react-router-dom";
import { FanLetterFormSection } from "./Styles";
import { aespa } from "static/data";

function FanLetterForm({ addFanLetter, article, updateFanLetter, selectMember }) {
  const navigate = useNavigate();
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const formData = {
      id: article ? article.id : crypto.randomUUID(),
      createdAt: article ? article.createdAt : new Date().toISOString(),
      avatar: null,
      nickname: e.target.name.value,
      content: e.target.content.value,
      writedTo: e.target.sendto.value,
    };
    article ? updateFanLetter(formData) : addFanLetter(formData);
    navigate("/");
    selectMember && selectMember(formData.writedTo);
  };

  return (
    <FanLetterFormSection>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          name="name"
          placeholder="닉네임"
          defaultValue={article && article.nickname}
          required
        ></input>
        <textarea
          name="content"
          placeholder="내용"
          defaultValue={article && article.content}
          required
        ></textarea>
        <div>
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
          </div>
          <button type="submit">팬레터 등록</button>
        </div>
      </form>
    </FanLetterFormSection>
  );
}

export default FanLetterForm;
