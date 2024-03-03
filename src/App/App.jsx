import Description from "../Description/Description";
import "./App.css";
import { useEffect, useState } from "react";
// import Options from "./Options";
// import Feedback from "./Feedback";

export default function App() {
  const [feedback, setFeedback] = useState(() => {
    const parsedFeedback = JSON.parse(localStorage.getItem'feedback');
    return (
      parsedFeedback || {
        good: 0,
        neutral: 0,
        bad: 0,
      }
    );
  });
  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback))
  }, [feedback]);

  
  return <Description />;
}
