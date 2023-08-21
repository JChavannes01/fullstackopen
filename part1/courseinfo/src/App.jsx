const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Content = (props) => {
  return (
    <p>
      {props.topic} {props.exerciseCount}
    </p>
  );
};

const Total = (props) => {
  return <p>Number of exercises {props.count}</p>;
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content topic={part1} exerciseCount={exercises1} />
      <Content topic={part2} exerciseCount={exercises2} />
      <Content topic={part3} exerciseCount={exercises3} />
      <Total count={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

export default App;
