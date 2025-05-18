import css from "./VoteOptions.module.css";
import type { VoteTypes } from "../../Types/VoteTypes";
import type { VoteOptionsProps } from "../../Types/VoteOptionsPropsTypes";

export default function VoteOptions({
  votes,
  setVotes,
  resetVotes,
}: VoteOptionsProps) {
  const updateVotes = (key: keyof VoteTypes) => {
    setVotes({
      ...votes,
      [key]: votes[key] + 1,
    });
  };

  return (
    <div className={css.container}>
      <button className={css.button} onClick={() => updateVotes("good")}>
        Good
      </button>
      <button className={css.button} onClick={() => updateVotes("neutral")}>
        Neutral
      </button>
      <button className={css.button} onClick={() => updateVotes("bad")}>
        Bad
      </button>
      <button className={`${css.button} ${css.reset}`} onClick={resetVotes}>
        Reset
      </button>
    </div>
  );
}
