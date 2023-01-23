import './DiscoverButton.css';
import arrow from '../../assets/arrow.svg';

type Props = {
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
  id: string;
};

export const DiscoverButton = ({ handleClick, id }: Props) => {
  return (
    <div>
      <button onClick={handleClick} className="discoverBtn" id={id}>
        <img src={arrow} alt="arrow" className="arrow" />
        discover
      </button>
    </div>
  );
};
