import { FanLetterFormSection } from "./Styles";

function FanLetterForm({ members }) {
  return (
    <FanLetterFormSection>
      <form>
        <input type="text" name="name" placeholder="닉네임"></input>
        <textarea name="content" placeholder="내용"></textarea>
        <div>
          <select title="sendto">
            <option defaultValue="">받을 사람</option>
            {members.map(({ id, name }) => {
              return (
                <option key={id} value={name}>
                  {name}
                </option>
              );
            })}
          </select>
          <button type="submit">팬레터 등록</button>
        </div>
      </form>
    </FanLetterFormSection>
  );
}

export default FanLetterForm;
