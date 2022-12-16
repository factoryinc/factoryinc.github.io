import {useState} from 'react';

const Options = ({ show, initialOptions = {} }) => {
  const [options, setOptions] = useState(initialOptions);

  return (
    <div className={`options-dialog`}>
      <button onClick={() => {}}>Back</button>
      <div className='options'>
        <label>
          Global timer (seconds):
          <input type='text' />
        </label>
      </div>
    </div>
  );
};

export default Options;
