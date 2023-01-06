import './DiscoverButton.css';

type Props = {
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
};

export const DiscoverButton = ({ handleClick }: Props) => {
  return (
    <div>
      <button className="discoverBtn" onClick={handleClick}>
        &#11177; discover
      </button>
    </div>
  );
};
