import { MemberCardSection } from "./Styles";
import { aespa } from "static/data";

function MemberCard({ member, selectMember }) {
  console.log(member);
  const handleOnClick = (name) => {
    selectMember(name);
  };

  return (
    <MemberCardSection>
      {aespa.map(({ id, name }) => {
        return (
          <button key={id} onClick={() => handleOnClick(name)} disabled={member === name}>
            {name}
          </button>
        );
      })}
    </MemberCardSection>
  );
}

export default MemberCard;
