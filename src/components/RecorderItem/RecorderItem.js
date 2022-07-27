import "./RecorderItem.css";

export default function RecorderItem(props) {
  return (
    <div
      className="item"
      style={{
        backgroundColor: props.isAnswered ? "lightgreen" : "transparent",
      }}
      onClick={() => props.handleQuestionNo(props.number)}
    >
      <span>{props.number}</span>
    </div>
  );
}
