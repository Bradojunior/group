import "./RecorderItem.css";

export default function RecorderItem(props) {
    return(
        <div className="item">
            <span className={props.isAnswered ? "isAnswered" : "item"}>{props.number}</span>
        </div>
    );
}