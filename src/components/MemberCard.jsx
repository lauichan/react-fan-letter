import { MemberCardSection } from "./Styles";

function MemberCard({ members }) {
  const handleOnClick = (id) => {
    alert(id);
  };

  return (
    <MemberCardSection>
      {members.map(({ id, name }) => {
        return (
          <button key={id} onClick={() => handleOnClick(id)}>
            {name}
          </button>
        );
      })}
    </MemberCardSection>
  );
}

export default MemberCard;
