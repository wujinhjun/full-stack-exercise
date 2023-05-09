import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];
  const n = anecdotes.length;
  //   const votes = Array(n).fill(0);

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(n).fill(0));

  const calc = (index) => {
    const res = Math.floor(Math.random() * n);
    if (res === index) {
      return calc(index);
    }
    return res;
  };
  const maxVotes = Math.max(...votes);
  const maxIndex = votes.findIndex((item) => item === maxVotes);

  const voteTo = (index) => {
    const cp = [...votes];
    cp[index] += 1;
    setVotes(cp);
  };

  return (
    <>
      <div>{anecdotes[selected]}</div>
      <div>has {votes[selected]} votes</div>
      <button onClick={() => voteTo(selected)}>vote</button>
      <button onClick={() => setSelected(calc(selected))}>next anecdote</button>
      <div>Anecdote with the most votes</div>
      <div>{anecdotes[maxIndex]}</div>
      <div>has {maxVotes} votes</div>
    </>
  );
};

export default App;
