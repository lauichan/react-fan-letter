import { FanLetterFormSection } from "./Styles";

function FanLetterForm({ members }) {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.content.value);
    console.log(e.target.sendto.value);
  };

  return (
    <FanLetterFormSection>
      <form onSubmit={handleOnSubmit}>
        <input type="text" name="name" placeholder="닉네임" required></input>
        <textarea name="content" placeholder="내용" required></textarea>
        <div>
          <select name="sendto" title="sendto" required>
            <option value="">받을 사람</option>
            {members.map(({ id, name }) => {
              return (
                <option key={id} value={id}>
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
