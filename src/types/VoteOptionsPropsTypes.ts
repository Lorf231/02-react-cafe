import type { VoteTypes } from "./Votes";

export interface VoteOptionsProps {
  votes: VoteTypes;
  setVotes: React.Dispatch<React.SetStateAction<VoteTypes>>;
  resetVotes: () => void;
}
