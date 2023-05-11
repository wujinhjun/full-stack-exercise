import Part from "./Part";

const Content = (props) => {
  const { parts } = props;

  return (
    <div>
      {parts.map((item) => (
        <Part key={item.id} part={item.name} exercises={item.exercises} />
      ))}
    </div>
  );
};

export default Content;
