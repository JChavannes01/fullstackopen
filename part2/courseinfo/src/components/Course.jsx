const Header = (props) => {
  return <h2>{props.course}</h2>;
};

const Content = (props) => {
  return (
    <div>
      {props.parts.map((part) => (
        <Part key={part.name} part={part} />
      ))}
    </div>
  );
};

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  );
};

const Total = (props) => {
  return (
    <p>
      <b>total of {props.count} exercises</b>
    </p>
  );
};

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total
        count={course.parts.reduce((count, part) => count + part.exercises, 0)}
      />
    </div>
  );
};

export default Course;
