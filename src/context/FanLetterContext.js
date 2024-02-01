import { createContext, useState } from "react";
import { fanLetters } from "static/data";

export const FanLetterContext = createContext(null);

export function FanLetter({ children }) {
  const [member, setMember] = useState("카리나");
  const [comments, setComments] = useState(fanLetters);

  const selectMember = (name) => {
    setMember(name);
  };

  const addFanLetter = (newComment) => {
    setComments((prev) => [...prev, newComment]);
  };

  const updateFanLetter = (updated) => {
    setComments((prev) => prev.map((comment) => (comment.id === updated.id ? updated : comment)));
  };

  const deleteFanLetter = (id) => {
    setComments((prev) => prev.filter((comment) => comment.id !== id));
  };

  const value = {
    member,
    comments,
    selectMember,
    addFanLetter,
    updateFanLetter,
    deleteFanLetter,
  };

  return <FanLetterContext.Provider value={value}>{children}</FanLetterContext.Provider>;
}
