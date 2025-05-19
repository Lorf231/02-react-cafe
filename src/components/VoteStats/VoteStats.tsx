import css from "./VoteStats.module.css"; // Виправлено 'modus' на 'module'
import type { VoteTypes } from "../../types/VoteTypes";

interface VoteStatsProps {
  votes: VoteTypes;
}

export default function VoteStats({ votes }: VoteStatsProps) {
  const total = votes.good + votes.neutral + votes.bad;
  const positivePercentage =
    total > 0 ? ((votes.good / total) * 100).toFixed(1) : 0;

  if (total === 0) {
    return (
      <div className={css.container}>
        <p className={css.stat}>No feedback yet</p>
      </div>
    );
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
        Total: <strong>{total}</strong>
      </p>
      <p className={css.stat}>
        Positive: <strong>{positivePercentage}%</strong>
      </p>
    </div>
  );
}
