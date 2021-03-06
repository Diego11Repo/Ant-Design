import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React, { useState } from 'react';
import { Button } from 'antd';
import styles from './index.less';
import ModalBasic from './ModalBasic';

export default () => {
  const [object, setObject] = useState({});

  const handleClick = () => {
    setObject({
      name: 'Diego',
      lastName: 'Vega',
      age: 22,
    });
  };

  return (
    <PageHeaderWrapper className={styles.main}>
      <Button onClick={handleClick}>Ok</Button>
      <ModalBasic object={object} />
    </PageHeaderWrapper>
  );
};
