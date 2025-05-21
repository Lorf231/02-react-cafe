import css from "./VoteStats.module.css";
import Notification from "../Notification/Notification";
import type { VoteStatsProps } from "../../Types/voteStatsProps";

export default function VoteStats({ votes }: VoteStatsProps) {
  const totalVotes = votes.good + votes.neutral + votes.bad;
  const positivePercentage = totalVotes
    ? Math.round((votes.good / totalVotes) * 100)
    : 0;

  if (totalVotes === 0) {
    return <Notification message="No feedback yet" />;
  }

  return (
    <div className={css.container}>
      <p className={css.stat}>
        Good: <strong>{votes.good}</strong>
      </p>
      <p className={css.stat}>
        Neutral: <strong>{votes.neutral}</strong>
      </p>
      <p className={css.stat}>
        Bad: <strong>{votes.bad}</strong>
      </p>
      <p className={css.stat}>
        Total: <strong>{totalVotes}</strong>
      </p>
      <p className={css.stat}>
        Positive: <strong>{positivePercentage}%</strong>
      </p>
    </div>
  );
}
