import { useState } from "react";

const Anecdote = ({ anecdote, votes }) => (
  <div>
    {anecdote}
    <br></br>
    has {votes} votes
  </div>
);

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

  const [scores, setScores] = useState(Array(anecdotes.length).fill(0));
  const [selected, setSelected] = useState(0);

  const randomAnecdote = () => {
    const newIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(newIndex);
  };

  const handleVote = () => {
    const copy = scores.slice();
    copy[selected] += 1;
    setScores(copy);
  };

  const maxScore = Math.max(...scores);
  const topAnecdoteIndex = scores.findIndex((s) => s === maxScore);
  const topAnecdote = anecdotes[topAnecdoteIndex];
  console.log(maxScore, topAnecdoteIndex);

  return (
    <>
      <h1>Anecdote of the day</h1>
      <Anecdote anecdote={anecdotes[selected]} votes={scores[selected]} />
      <button onClick={handleVote}>vote</button>
      <button onClick={randomAnecdote}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <Anecdote anecdote={topAnecdote} votes={maxScore} />
    </>
  );
};

export default App;
