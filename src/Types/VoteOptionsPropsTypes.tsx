import type { VoteTypes } from "./VoteTypes";

export interface VoteOptionsProps {
  votes: VoteTypes;
  setVotes: React.Dispatch<React.SetStateAction<VoteTypes>>;
  resetVotes: () => void;
}
