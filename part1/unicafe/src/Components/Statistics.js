const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

export default function Statistics({ lines, all, allCount, positive }) {
  const text = [...lines];
  text.push({ name: "all", value: all });
  text.push({ name: "average", value: allCount / all });
  text.push({ name: "positive", value: `${positive} %` });
  console.log(all);
  console.log(`all count ${allCount}`);
  if (all !== 0) {
    return (
      <table>
        <tbody>
          {text.map((item) => {
            return <StatisticLine text={item.name} value={item.value} />;
          })}
        </tbody>
      </table>
    );
  } else {
    return <p>No feedback given</p>;
  }
}
