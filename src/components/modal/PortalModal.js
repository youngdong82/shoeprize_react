import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { GrClose } from 'react-icons/gr'
import { getData } from '../../shared/getData';
import Modal from './Modal';
import Loading from '../Loading';

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
        <ModalComp>
        <RemoveBtn onClick={clickEvent}><GrClose size={16} /></RemoveBtn>
        {modalData ?
          <Modal data={modalData} />
        :<Loading size={30} />}
        </ModalComp>
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
const ModalComp = styled.div`
  position: relative;
  width: 400px;
  height: 600px;
  padding: 0px 20px;
  background-color: ${({theme}) => theme.colors.white};
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
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