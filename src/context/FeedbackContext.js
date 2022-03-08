import { v4 as uuidv4 } from "uuid";
import { createContext, useState } from "react";
const FeedbackContext = createContext();
// Create a provider
export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This is the 1st feedback",
      rating: 10,
    },
    {
      id: 2,
      text: "This is the 2nd feedback",
      rating: 9,
    },
    {
      id: 3,
      text: "This is the 3rd feedback",
      rating: 8,
    },
  ]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });
  const updateFeedback = (id, updateItem) => {
    setFeedback(
      feedback.map((item) =>
        item.id === id ? { ...item, ...updateItem } : item
      )
    );
  };
  const deleteFeedback = (id) => {
    if (window.confirm("Do you want to delete this feedback permanently?"))
      setFeedback(feedback.filter((item) => item.id !== id));
  };
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };
  // set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
