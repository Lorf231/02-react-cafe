import type { VoteTypes } from "./votes";

export interface VoteOptionsProps {
  votes: VoteTypes;
  setVotes: React.Dispatch<React.SetStateAction<VoteTypes>>;
  resetVotes: () => void;
}
