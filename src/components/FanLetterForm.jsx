import { FanLetterFormSection } from "./Styles";

function FanLetterForm({ members, addFanLetter, updateFanLetter }) {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const newComment = {
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      avatar: null,
      nickname: e.target.name.value,
      content: e.target.content.value,
      writedTo: e.target.sendto.value,
    };
    addFanLetter(newComment);
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
