import { useState } from "react";
import css from "./App.module.css";
import CafeInfo from "../CafeInfo/CafeInfo";
import VoteOptions from "../VoteOptions/VoteOptions";
import VoteStats from "../VoteStats/VoteStats";
import type { VoteTypes } from "../../Types/votes";

export default function App() {
  const [votes, setVotes] = useState<VoteTypes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const resetVotes = () => {
    setVotes({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions votes={votes} setVotes={setVotes} resetVotes={resetVotes} />
      <VoteStats votes={votes} />
    </div>
  );
}
