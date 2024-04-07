import React, { useEffect } from 'react';
import { useTheme } from '@material-ui/core/styles';  // useTheme フックをインポート
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

const EffectFunction = ({ count, setCount }) => {
  useEffect(() => {
    document.title = `${count} 回クリックされました`;
  }, [count]);

  const theme = useTheme(); // useTheme フックを関数コンポーネントの本体内で呼び出す

  return (
    <>
      <p style={{ color: theme.palette.primary.main }}>{`${count} 回クリックされました`}</p>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button onClick={() => setCount(count + 1)}>ボタン</Button>
        <Button onClick={() => setCount(0)}>リセット</Button>
      </ButtonGroup>
    </>
  );
};

export default EffectFunction;
