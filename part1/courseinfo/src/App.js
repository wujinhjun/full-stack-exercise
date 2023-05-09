const Header = (props) => {
  const { course } = props;
  return <h1>{course}</h1>;
};

const Part = (props) => {
  const { part, exercises } = props;
  return (
    <p>
      {part} {exercises}
    </p>
  );
};

const Content = (props) => {
  const { parts } = props;

  return (
    <div>
      {parts.map((item, index) => (
        <Part key={index} part={item.name} exercises={item.exercises} />
      ))}
    </div>
  );
};

const Total = (props) => {
  const { exercises } = props;
  return <p>Number of exercises {exercises}</p>;
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total
        exercises={course.parts.reduce(
          (cur, item) => (cur += item.exercises),
          0
        )}
      />
    </div>
  );
};

export default App;
