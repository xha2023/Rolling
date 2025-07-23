import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import Theme from '../styles/theme';
import { Link } from 'react-router-dom';
import { getRecipients } from '../api/recipients';
import useAsync from '../hooks/useAsync';
import CardCarousel from '../components/card-list/CardCarousel';

const AllpapersPage = () => {
  const [popularCardList, setPopularCardList] = useState([]);
  const [recentCardList, setRecentCardList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isLoadingRecipients, , getRecipientsAsync] = useAsync(getRecipients);

  const handlePopularLoad = useCallback(async () => {
    const result = await getRecipientsAsync({ sort: 'like' });
    const popularCard = [...result.results];
    setPopularCardList(popularCard);
  }, [getRecipientsAsync]);

  const handleRecentLoad = useCallback(async () => {
    const result = await getRecipientsAsync({});
    const recentCards = [...result.results];
    setRecentCardList(recentCards);
    setLoading(false);
  }, [getRecipientsAsync]);

  useEffect(() => {
    handlePopularLoad();
    handleRecentLoad();
  }, [handlePopularLoad, handleRecentLoad]);

  if (loading) {
    return <Container>로딩 중...</Container>;
  }

  return (
    <ListPage>
      <ListContainer>
        <ListHeader>
          <ListTitle>인기 롤링 페이퍼 🔥</ListTitle>
        </ListHeader>
        <CardCarousel cardList={popularCardList} />
      </ListContainer>
      <ListContainer>
        <ListHeader>
          <ListTitle>최근에 만든 롤링 페이퍼⭐️</ListTitle>
        </ListHeader>
        <CardCarousel cardList={recentCardList} />
      </ListContainer>
      <ButtonContainer>
        <Link to="/post">
          <Button>나도 만들어보기</Button>
        </Link>
      </ButtonContainer>
    </ListPage>
  );
};

export default AllpapersPage;

const Container = styled.div`
  padding: 20px;
  background-color: #f8f9fa;
  min-height: 100vh;
`;

const ListPage = styled.main`
  @media (min-width: 1248px) {
    display: flex;
    max-width: 1200px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    position: relative;
  }
`;

const ListContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  margin-inline: auto;
  /* padding-inline: 38px; */
  padding-top: 50px;
  /* padding-bottom: 50px; */

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ListHeader = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ListTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1.5rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-left: 20px;
  margin-bottom: 0;

  @media (min-width: 768px) {
    margin-left: 24px;
    margin-bottom: 0;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  margin-top: 40px;
  padding: 24px;

  @media (min-width: 768px) {
    margin-top: 40px;
    padding: 24px;
  }

  @media (min-width: 1248px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    position: relative;
    /* left: -1.4rem; */
  }
`;

const Button = styled.button`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  width: 100%;
  padding: 1.4rem 2.4rem;
  border-radius: 0.75rem;
  color: var(--white, #fff);
  text-align: center;
  background: var(--purple-600, #9935ff);
  border: 1px solid #9935ff;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  gap: 1rem;

  @media (min-width: 1248px) {
    width: 28rem;
  }

  &:hover {
    background-color: var(--purple-700, #861dee);
  }

  &:active {
    background-color: var(--purple-800, #6e0ad1);
  }

  &:focus {
    background-color: var(--purple-800, #6e0ad1);
  }

  &:disabled {
    background-color: var(--gray-300, #ccc);
  }
`;
