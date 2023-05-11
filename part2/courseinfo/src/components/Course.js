import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

export default function Course({ course }) {
  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total
        exercises={course.parts.reduce(
          (cur, item) => (cur += item.exercises),
          0
        )}
      />
    </>
  );
}
