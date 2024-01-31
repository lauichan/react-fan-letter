import { aespa } from "static/data";
import { MemberButtonStyle, MemberCardStyle } from "./Styles";
import { useDispatch, useSelector } from "react-redux";
import { selectMember } from "store/modules/member";

function MemberCard() {
  const member = useSelector((state) => state.member);
  const dispatch = useDispatch();

  const handleOnClick = (name) => {
    dispatch(selectMember(name));
    console.log(name);
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

export default MemberCard;
