import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Modal from './Modal';
import { GrClose } from 'react-icons/gr'
import { getData } from '../../shared/getData';

//포탈을 위한 데이터 처리 및 포탈 관련 로직
const PortalModal = ({uuid, clickEvent}) => {
  const [modalData, setModalData] = useState(null);
  useEffect(() => {
    getData(`/static/product_release/${uuid}.json`, setModalData);
  },[uuid])

  const modalRoot = document.getElementById('modal');
  return(
    ReactDOM.createPortal(
      <ModalTempComp>
        {modalData !== null ?
          <Modal data={modalData}>
            {<RemoveBtn onClick={clickEvent}><GrClose size={16} /></RemoveBtn>}
          </Modal>
          :<></>
        }
      </ModalTempComp>, modalRoot
    )
  )
}

export default PortalModal;

const ModalTempComp = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.colors.black_trans};
  z-index: 2;
`
const RemoveBtn = styled.button`
  position: absolute;
  top: 12px;
  right: 16px;
  width: 16px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`