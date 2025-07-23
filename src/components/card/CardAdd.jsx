import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
// import plusImg from '../../assets/svg/plus.svg';
import { CardContainer } from './MessageCard.styled';
import CircleButton from '../button/CircleButton';
import plusIcon from '../../assets/icon/ic_plus.svg';

const CardAddContainer = styled(CardContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const AddCard = ({ onClickAdd }) => {
  return (
    <CardAddContainer>
      <CircleButton onClick={onClickAdd} icon={plusIcon} />
    </CardAddContainer>
  );
};

export default AddCard;
