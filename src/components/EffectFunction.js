import React, { useState , useEffect } from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

function EffectFunction() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState({
    lastName: '',
    firstName: ''
  })


  useEffect(() => {
    document.title = `${count}回クリックされました`;
  }, [count]);

  return (
    <>
      <p>{`${count}回クリックされました`}</p>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button onClick={() => setCount(count + 1)}>
          ボタン
        </Button>
        <Button onClick={() => setCount(0)}>
          リセット
        </Button>
      </ButtonGroup>
      <p>{`私の名前は${name.lastName} ${name.firstName}です`}</p>
      <form >
        <input
          placeholder="姓"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}/>
        <input
          placeholder="名"
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}/>
      </form>
    </>
  );
}

export default EffectFunction;
