import { useNavigate } from "react-router-dom";
import { FanLetterListSection } from "./Styles";
import React from "react";

function FanLetterList({ list }) {
  const navigate = useNavigate();

  const handleOnClick = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <FanLetterListSection>
      {list.length === 0 ? (
        <p>팬 레터가 없습니다.</p>
      ) : (
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
      )}
    </FanLetterListSection>
  );
}

export default React.memo(FanLetterList);
