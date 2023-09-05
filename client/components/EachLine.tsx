interface Props {
  person: string
  message: string
}

export default function EachLine(props: Props) {
  return (
    <div className="bubbleWrapper">
      <div className="inlineContainer">
        <img
          className="inlineIcon"
          src="https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png"
        />
        <div>{props.person && props.person}</div>
        <div className="otherBubble other"> {props.message}</div>
      </div>
    </div>
  )
}
