import FanLetterDetail from "components/FanLetterDetail";

function Detail({ comments, updateFanLetter, deleteFanLetter }) {
  return (
    <FanLetterDetail
      comments={comments}
      updateFanLetter={updateFanLetter}
      deleteFanLetter={deleteFanLetter}
    />
  );
}

export default Detail;
