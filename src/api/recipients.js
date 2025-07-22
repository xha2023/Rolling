import { fetchApi } from './apiClient';

/**
 * // 롤링페이퍼 가진 인물 목록 조회
 * @param {object} [options={}] - 페이징 및 정렬 옵션 (예: { limit: 8, offset: 0, sort: 'like' })
 * @returns {Promise<object>} - 대상 목록과 관련 정보
 */
export const getRecipients = (options = {}) => {
  const query = new URLSearchParams(options).toString();
  const endpoint = `/recipients/${query ? `?${query}` : ''}`;
  return fetchApi(endpoint);
};

/**
 * 롤링페이퍼 페이지 생성
 * @param {object} data - 대상 정보 (예: { name: "새로운 대상", backgroundColor: "blue" })
 * @returns {Promise<object>} - 생성된 대상 정보
 */
export const createRecipient = (data) => {
  const endpoint = `/recipients/`;
  return fetchApi(endpoint, {
    method: 'POST',
    body: data,
  });
};

/**
 * 개인 롤링페이퍼 조회
 * @param {number|string} id - 조회할 대상의 ID
 * @returns {Promise<object>} - 대상 객체
 */
export const getRecipient = (id) => {
  const endpoint = `/recipients/${id}/`;
  return fetchApi(endpoint);
};

/**
 * 개인 롤링페이퍼 삭제
 * @param {number|string} id - 삭제할 대상의 ID
 * @returns {Promise<null>} - 성공 시 내용 없음
 */
export const deleteRecipient = (id) => {
  const endpoint = `/recipients/${id}/`;
  return fetchApi(endpoint, {
    method: 'DELETE',
  });
};

/**
 * 개인 롤링페이퍼 반응 조회
 * @param {number|string} id - 대상의 ID
 * @returns {Promise<object>} - 리액션 목록 정보
 */
export const getReactionsForRecipient = (id) => {
  const endpoint = `/recipients/${id}/reactions/`;
  return fetchApi(endpoint);
};

/**
 * 개인 롤링페이퍼 반응 업데이트
 * @param {number|string} id - 대상의 ID
 * @param {object} data - 리액션 정보 (예: { emoji: "👍", type: "increase" })
 * @returns {Promise<object>} - 생성된 리액션 정보
 */
export const createReaction = (id, data) => {
  const endpoint = `/recipients/${id}/reactions/`;
  return fetchApi(endpoint, {
    method: 'POST',
    body: data,
  });
};
