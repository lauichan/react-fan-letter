import { useNavigate } from "react-router-dom";
import { FanLetterListSection } from "./Styles";

function FanLetterList({ list }) {
  const navigate = useNavigate();

  const handleOnClick = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <FanLetterListSection>
      <ul>
        {list.map(({ id, avatar, nickname, content }) => {
          return (
            <li key={id} onClick={() => handleOnClick(id)}>
              <img src={avatar} alt={nickname}></img>
              <div>
                <span>{nickname}</span>
                <p>{content}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </FanLetterListSection>
  );
}

export default FanLetterList;
