//롤링 페이퍼 대상에게 남기는 메세지 데이터를 저장

import { fetchApi } from './apiClient';

/**
 * 특정 메시지 한개 조회
 * @param {number|string} messageId - 조회할 메시지의 ID
 */
export const readMessage = (messageId) => {
  const endpoint = `/messages/${messageId}/`;
  return fetchApi(endpoint);
};

/**
 * 메시지 내용 수정
 * @param {number|string} messageId - 수정할 메시지의 ID
 * @param {object} data - 수정할 전체 데이터
 */
export const updateMessage = (messageId, data) => {
  const endpoint = `/messages/${messageId}/`;
  return fetchApi(endpoint, {
    method: 'PUT',
    body: data,
  });
};

/**
 * 메시지 내용 부분 수정
 * @param {number|string} messageId - 수정할 메시지의 ID
 * @param {object} data - 수정할 필드 데이터
 */
export const partialUpdateMessage = (messageId, data) => {
  const endpoint = `/messages/${messageId}/`;
  return fetchApi(endpoint, {
    method: 'PATCH',
    body: data,
  });
};

/**
 * 메시지 삭제
 * @param {number|string} messageId - 삭제할 메시지의 ID
 */
export const deleteMessage = (messageId) => {
  const endpoint = `/messages/${messageId}/`;
  return fetchApi(endpoint, {
    method: 'DELETE',
  });
};

// =================================================================
// 특정 대상(Recipient)의 메시지 목록에 대한 작업
// =================================================================

/**
 * 개인 롤링페이퍼 목록 조회
 * (GET /recipients/{recipientId}/messages/)
 * @param {number|string} recipientId - 메시지 목록을 조회할 대상의 ID
 * @param {object} [options={}] - 페이징 옵션 (limit, offset)
 */
export const getMessageList = (recipientId, options = {}) => {
  const query = new URLSearchParams(options).toString();
  const endpoint = `/recipients/${recipientId}/messages/${query ? `?${query}` : ''}`;
  return fetchApi(endpoint);
};

/**
 * 개인 롤링페이퍼 페이지에서 메시지 생성
 * (POST /recipients/{recipientId}/messages/)
 * @param {number|string} recipientId - 메시지를 보낼 대상의 ID
 * @param {object} data - 메시지 내용 (sender, content 등)
 */
export const createMessage = (recipientId, data) => {
  const endpoint = `/recipients/${recipientId}/messages/`;
  return fetchApi(endpoint, {
    method: 'POST',
    body: data,
  });
};
