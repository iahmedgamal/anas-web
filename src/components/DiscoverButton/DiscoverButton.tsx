import './DiscoverButton.css';
import arrow from '../../assets/arrow.svg';

type Props = {
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
};

export const DiscoverButton = ({ handleClick }: Props) => {
  return (
    <div>
      <button onClick={handleClick} className="discoverBtn">
        <img src={arrow} alt="arrow" className="arrow" />
        discover
      </button>
    </div>
  );
};
