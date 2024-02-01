import FanLetterDetail from "components/FanLetterDetail";
import FanLetterForm from "components/FanLetterForm";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteFanLetter, updateFanLetter } from "store/modules/fanletter";
import { selectMember } from "store/modules/member";

function Detail() {
  const { id } = useParams();
  const comments = useSelector((state) => state.fanletter);
  const article = comments.find((letter) => letter.id === id) ?? {};
  const [editMode, setEditMode] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeEditMode = (bool) => {
    setEditMode(bool);
  };

  const handleDeleteBtn = (id) => {
    if (window.confirm("삭제 확인")) {
      dispatch(deleteFanLetter(id));
      navigate("/");
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { name, content, sendto } = e.target;

    const isUnchanged =
      name.value === article.nickname &&
      content.value === article.content &&
      sendto.value === article.writedTo;

    if (isUnchanged) {
      alert("수정된 내용이 없습니다.");
      return;
    }

    const formData = {
      id: article.id,
      createdAt: article.createdAt,
      avatar: article.avatar,
      nickname: name.value,
      content: content.value,
      writedTo: sendto.value,
    };

    if (!window.confirm("팬레터 수정 확인")) return;

    dispatch(updateFanLetter(formData));
    dispatch(selectMember(formData.writedTo));
    navigate("/");
  };

  if (editMode)
    return (
      <FanLetterForm
        data={article}
        handleOnSubmit={handleOnSubmit}
        editMode={editMode}
        changeEditMode={changeEditMode}
      />
    );

  return (
    <>
      <FanLetterDetail
        article={article}
        changeEditMode={changeEditMode}
        handleDeleteBtn={handleDeleteBtn}
      />
    </>
  );
}

export default Detail;
