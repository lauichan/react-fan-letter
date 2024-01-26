import { useNavigate } from "react-router-dom";
import { FanLetterListSection } from "./Styles";

function FanLetterList({ list }) {
  const navigate = useNavigate();
  const handleOnClick = (id) => navigate(`/detail/${id}`);

  return (
    <FanLetterListSection>
      <ul>
        {list.map(({ id, name, content }) => {
          return (
            <li key={id} onClick={() => handleOnClick(id)}>
              <span>{name}</span>
              <p>{content}</p>
            </li>
          );
        })}
      </ul>
    </FanLetterListSection>
  );
}

export default FanLetterList;
