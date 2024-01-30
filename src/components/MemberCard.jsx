import React, { useContext } from "react";
import { aespa } from "static/data";
import { FanLetterContext } from "context/FanLetterContext";
import { MemberButtonStyle, MemberCardStyle } from "./Styles";

function MemberCard() {
  const { member, selectMember } = useContext(FanLetterContext);

  const handleOnClick = (name) => {
    selectMember(name);
  };

  return (
    <MemberCardStyle>
      {aespa.map(({ id, name }) => {
        return (
          <MemberButtonStyle
            type="button"
            key={id}
            onClick={() => handleOnClick(name)}
            $backColor={member === name ? "white" : "#f9f9f9"}
          >
            {name}
          </MemberButtonStyle>
        );
      })}
    </MemberCardStyle>
  );
}

export default React.memo(MemberCard);
