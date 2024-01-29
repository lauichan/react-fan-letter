import { MemberCardSection } from "./Styles";
import { aespa } from "static/data";

function MemberCard({ member, selectMember }) {
  const handleOnClick = (name) => {
    selectMember(name);
  };

  return (
    <MemberCardSection>
      {aespa.map(({ id, name }) => {
        return (
          <button
            type="button"
            key={id}
            onClick={() => handleOnClick(name)}
            disabled={member === name}
          >
            {name}
          </button>
        );
      })}
    </MemberCardSection>
  );
}

export default MemberCard;
