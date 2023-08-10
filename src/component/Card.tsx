interface Props {
  cardItems: string[];
  onClear: () => void;
}

const Card = ({ cardItems, onClear }: Props) => {
  return (
    <>
      <div>Card</div>
      <ul>
        {cardItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button className="btn btn-secondary" onClick={onClear}>
        Clear
      </button>
    </>
  );
};

export default Card;

// If we want to have many tags in our const we have to use fragment <></>
