import { useNavigate } from "react-router-dom";
import { aespa } from "static/data";
import { v4 as uuidv4 } from "uuid";
import {
  ButtonStyle,
  FormBottomStyle,
  FormInputStyle,
  FormSelectStyle,
  FormStyle,
  FormTextAreaStyle,
} from "./Styles";
import { useDispatch, useSelector } from "react-redux";
import { addFanLetter, updateFanLetter } from "store/modules/fanletter";
import { selectMember } from "store/modules/member";

function FanLetterForm({ article, changeEditMode }) {
  const member = useSelector((state) => state.member);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const { name, content, sendto } = e.target;

    if (
      article &&
      name.value === article.nickname &&
      content.value === article.content &&
      sendto.value === article.writedTo
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

    if (!window.confirm(`팬레터 ${article ? "수정" : "작성"} 확인`)) return;

    article ? dispatch(updateFanLetter(formData)) : dispatch(addFanLetter(formData));
    dispatch(selectMember(formData.writedTo));
    e.target.reset();
    navigate("/");
  };

  return (
    <section>
      <FormStyle $backColor={article ? "ghostwhite" : "white"} onSubmit={handleOnSubmit}>
        <FormInputStyle
          type="text"
          name="name"
          placeholder="닉네임"
          defaultValue={article && article.nickname}
          maxLength={30}
          autoComplete="true"
          autoFocus
          required
        ></FormInputStyle>
        <FormTextAreaStyle
          name="content"
          placeholder="내용"
          defaultValue={article && article.content}
          maxLength={300}
          required
        ></FormTextAreaStyle>
        <FormBottomStyle>
          To.
          <FormSelectStyle name="sendto" title="sendto" required>
            <option defaultValue={article ? article.writedTo : member}>
              {article ? article.writedTo : member}
            </option>
            {aespa.map(({ id, name }) => {
              return (
                <option key={id} value={name}>
                  {name}
                </option>
              );
            })}
          </FormSelectStyle>
          {article && (
            <ButtonStyle type="button" onClick={() => changeEditMode(false)}>
              취소
            </ButtonStyle>
          )}
          <ButtonStyle type="submit">팬레터 {article ? "수정" : "등록"}</ButtonStyle>
        </FormBottomStyle>
      </FormStyle>
    </section>
  );
}

export default FanLetterForm;
