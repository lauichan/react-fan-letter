import { MemberCardSection } from "./Styles";
import { aespa } from "static/data";

function MemberCard({ selectMember }) {
  const handleOnClick = (name) => {
    selectMember(name);
  };

  return (
    <MemberCardSection>
      {aespa.map(({ id, name }) => {
        return (
          <button key={id} onClick={() => handleOnClick(name)}>
            {name}
          </button>
        );
      })}
    </MemberCardSection>
  );
}

export default MemberCard;
