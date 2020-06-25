import React, { useState } from 'react';
import { Modal, Button } from 'antd';

const ModalBasic = ({ object }) => {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal title="Basic Modal" visible={visible} onOk={handleOk} onCancel={handleCancel}>
        <p>{object.name}</p>
        <p>{object.lastName}</p>
        <p>{object.age}</p>
      </Modal>
    </div>
  );
};

export default ModalBasic;
