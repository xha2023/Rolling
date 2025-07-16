import { fetchApi } from './apiClient';

/**
 * 롤링페이퍼를 꾸밀 수 있는 배경 이미지 목록을 조회합니다.
 */
export const getBackgroundImages = () => {
  return fetchApi('/background-images/', { isPublic: true });
};

/**
 * 메시지 작성 시 사용할 수 있는 프로필 이미지 목록을 조회합니다.
 */
export const getProfileImages = () => {
  return fetchApi('/profile-images/', { isPublic: true });
};
