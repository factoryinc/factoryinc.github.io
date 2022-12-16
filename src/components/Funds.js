import './funds.css';

const Funds = ({ amount }) => {
  return (
    <div className={`funds ${amount < 0 ? 'funds-negative' : ''}`}>${amount}</div>
  );
}

export default Funds;
