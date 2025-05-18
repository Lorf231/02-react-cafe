import { useState } from "react";
import css from "./App.module.css";
import CafeInfo from "../CafeInfo/CafeInfo";
import type { VoteTypes } from "../../Types/VoteTypes";

export default function App() {
  const [votes, setVotes] = useState(0);

  const votes: VoteTypes = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  return (
    <>
      <div className={css.app}>
        <CafeInfo />
      </div>
    </>
  );
}
