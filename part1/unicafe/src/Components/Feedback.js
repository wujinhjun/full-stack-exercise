export default function Feedback({ feedbacks }) {
  return (
    <>
      <h1>give feedback</h1>
      {feedbacks.map((item, index) => (
        <button key={index} onClick={item.handler}>
          {item.name}
        </button>
      ))}
    </>
  );
}
