import { MemberCardSection } from "./Styles";

function MemberCard({ members, selectMember }) {
  const handleOnClick = (name) => {
    selectMember(name);
  };

  return (
    <MemberCardSection>
      {members.map(({ id, name }) => {
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
