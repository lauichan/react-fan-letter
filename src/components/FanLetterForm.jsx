import { aespa } from "static/data";
import {
  ButtonStyle,
  FormBottomStyle,
  FormInputStyle,
  FormSelectStyle,
  FormStyle,
  FormTextAreaStyle,
} from "./Styles";

function FanLetterForm({ data, editMode, changeEditMode, handleOnSubmit }) {
  return (
    <section>
      <FormStyle onSubmit={handleOnSubmit}>
        <FormInputStyle
          type="text"
          name="name"
          placeholder="닉네임"
          defaultValue={data.nickname}
          maxLength={30}
          autoComplete="true"
          autoFocus
          required
        ></FormInputStyle>

        <FormTextAreaStyle
          name="content"
          placeholder="내용"
          defaultValue={data.content}
          maxLength={300}
          required
        ></FormTextAreaStyle>

        <FormBottomStyle>
          To.
          <FormSelectStyle name="sendto" title="sendto" required>
            <option defaultValue={data.writedTo}>{data.writedTo}</option>
            {aespa.map(({ id, name }) => {
              return (
                <option key={id} value={name}>
                  {name}
                </option>
              );
            })}
          </FormSelectStyle>
          {editMode && (
            <ButtonStyle type="button" onClick={() => changeEditMode(false)}>
              취소
            </ButtonStyle>
          )}
          <ButtonStyle type="submit">팬레터 {editMode ? "수정" : "등록"}</ButtonStyle>
        </FormBottomStyle>
      </FormStyle>
    </section>
  );
}

export default FanLetterForm;
