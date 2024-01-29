import FanLetterDetail from "components/FanLetterDetail";

function Detail({ comments, updateFanLetter, deleteFanLetter, selectMember }) {
  return (
    <FanLetterDetail
      comments={comments}
      updateFanLetter={updateFanLetter}
      deleteFanLetter={deleteFanLetter}
      selectMember={selectMember}
    />
  );
}

export default Detail;
