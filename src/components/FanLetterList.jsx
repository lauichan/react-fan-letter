import { useNavigate } from "react-router-dom";
import {
  ListContentStyle,
  ListAvatarStyle,
  ListNameStyle,
  ListUlStyle,
  ListWrapperStyle,
  ListliStyle,
} from "./Styles";

function FanLetterList({ list }) {
  const navigate = useNavigate();

  const handleOnClick = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <section>
      {list.length === 0 ? (
        <p>팬 레터가 없습니다.</p>
      ) : (
        <ListUlStyle>
          {list.map(({ id, avatar, nickname, content }) => {
            return (
              <ListliStyle key={id} onClick={() => handleOnClick(id)}>
                <ListAvatarStyle src={avatar} alt={nickname}></ListAvatarStyle>
                <ListWrapperStyle>
                  <ListNameStyle>{nickname}</ListNameStyle>
                  <ListContentStyle>{content}</ListContentStyle>
                </ListWrapperStyle>
              </ListliStyle>
            );
          })}
        </ListUlStyle>
      )}
    </section>
  );
}

export default FanLetterList;
