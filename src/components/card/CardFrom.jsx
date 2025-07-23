import styled from 'styled-components';
import { Link } from 'react-router-dom';

import ProfileImageGroup from '../profile-Images/ProfileImageGroup';
import yellowPattern from '../../assets/img/card_pattern_yellow.png';
import purplePattern from '../../assets/img/card_pattern_purple.png';
import bluePattern from '../../assets/img/card_pattern_blue.png';
import greenPattern from '../../assets/img/card_pattern_green.png';
import theme from '../../styles/theme';

const defaultColor = theme.colors.secondary[200];

const colorChips = {
  beige: {
    id: 'yellowChip',
    backgroundType: 'color',
    color: theme.colors.secondary[200],
    pattern: yellowPattern,
  },
  purple: {
    id: 'purpleChip',
    backgroundType: 'color',
    color: theme.colors.primary[200],
    pattern: purplePattern,
  },
  blue: {
    id: 'blueChip',
    backgroundType: 'color',
    color: theme.colors.blue[200],
    pattern: bluePattern,
  },
  green: {
    id: 'greenChip',
    backgroundType: 'color',
    color: theme.colors.green[200],
    pattern: greenPattern,
  },
};

function Emoji({ reaction }) {
  return (
    <EmojiCont id={reaction.id}>
      <EmojiElement>{reaction.emoji}</EmojiElement>
      <EmojiCount>{reaction.count}</EmojiCount>
    </EmojiCont>
  );
}

function CardFrom({ card }) {
  const {
    name,
    backgroundColor,
    backgroundImageURL,
    messageCount,
    topReactions,
    recentMessages,
  } = card;

  const profileImages =
    recentMessages === 0
      ? []
      : recentMessages.map((message) => message.profileImageURL).slice(0, 3);

  const reactions = [...topReactions].slice(0, 3);
  const colorPalette = colorChips[backgroundColor];

  return (
    <Link to={`/post/${card.id}`}>
      <CardWrapper
        $backgroundColor={colorPalette.color}
        $bgImageURL={backgroundImageURL}
      >
        <CardInfo>
          <Recipient $bgImage={backgroundImageURL}>To. {name}</Recipient>
          <ProfileImageGroup
            profileImages={profileImages}
            messageCount={messageCount}
          />
          <WriterCounter $bgImage={backgroundImageURL}>
            <span>{messageCount}</span>
            명이 작성했어요!
          </WriterCounter>
        </CardInfo>
        <BottomContainer>
          <EmojiContainer>
            {reactions.length !== 0 &&
              reactions.map((el) => <Emoji reaction={el} key={el.emoji} />)}
          </EmojiContainer>
        </BottomContainer>
        <PatternImg src={colorPalette.pattern} $bgImage={backgroundImageURL} />
      </CardWrapper>
    </Link>
  );
}

export default CardFrom;

const CardWrapper = styled.div`
  position: relative;
  width: 275px; //20.8rem;
  height: 260px; //23.2rem;
  flex-shrink: 0;
  padding: 30px 24px;
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: ${({ $backgroundColor, $bgImageURL }) =>
    $bgImageURL
      ? `linear-gradient(180deg, rgba(0, 0, 0, 0.54) 0%, rgba(0, 0, 0, 0.54) 100%), url(${$bgImageURL})`
      : `${$backgroundColor}`};
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: 0 0.2rem 1.2rem 0 rgba(0, 0, 0, 0.08);
  box-sizing: border-box;
  cursor: pointer;

  @media (min-width: 768px) {
    /* width: 27.5rem; */
    /* height: 26rem; */
    width: 275px;
    height: 260px;
    padding: 30px 24px;
  }
`;

const Recipient = styled.h1`
  font-size: 24px;
  font-weight: 700;
  line-height: 38px;
  letter-spacing: -1px;
  white-space: nowrap;
  align-self: stretch;
  overflow: hidden;
  color: ${({ $bgImage }) =>
    $bgImage ? 'var(--white, #fff)' : 'var(--gray-900, #181818)'};
  text-overflow: ellipsis;
  margin-bottom: 0;

  @media (min-width: 768px) {
  }
`;

const CardInfo = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 12px;
`;

const WriterCounter = styled.div`
  color: ${({ $bgImage }) =>
    $bgImage ? 'var(--grey-200, #eee)' : 'var(--gray-700, #3a3a3a)'};

  span {
    font-size: 16px;
    font-weight: 700;
    line-height: 26px;
    letter-spacing: -1px;
    color: ${({ $bgImage }) =>
      $bgImage ? 'var(--grey-200, #eee)' : 'var(--gray-700, #3a3a3a)'};
  }

  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: -1px;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 26px;
    letter-spacing: -1px;

    span {
      font-size: 16px;
      letter-spacing: -1px;
    }
  }
`;

const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 227px;
  gap: 16px;
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  padding-top: 16px;
  margin-top: 43px;

  /* @media (min-width: 768px) {
    width: 22.7rem;
  } */
`;

const EmojiContainer = styled.div`
  display: flex;
  align-items: flex-start;
  z-index: 1;
  gap: 8px;

  @media (min-width: 768px) {
    gap: 8px;
  }
`;

const PatternImg = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 142px; //10.7rem;
  height: 142px; //14.2rem;
  flex-shrink: 0;
  border-radius: 0 0 16px 0;
  opacity: 0.7;
  display: ${({ $bgImage }) => ($bgImage ? 'none' : 'static')} !important;

  @media (min-width: 768px) {
    width: 104px;
  }

  @media (min-width: 1200px) {
    width: 142px;
  }
`;

const EmojiCont = styled.div`
  display: flex;
  width: fit-content;
  height: 34px;
  padding: 8px 12px;
  align-items: center;
  gap: 2px;
  border-radius: 32px;
  background: rgba(0, 0, 0, 0.54);
  cursor: pointer;

  @media (min-width: 768px) {
    padding: 8px 12px;
  }
`;

const EmojiElement = styled.span`
  font-size: 20px;
  font-weight: 400;
  line-height: 20px;
  margin: 0 4px 0 2px;
`;

const EmojiCount = styled.span`
  color: var(--white, #fff);
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  padding-left: 2px;
`;
