import { BASE_URL, TEAM_NAME } from './apiConfig.js';

export async function fetchApi(endpoint, options = {}) {
  const { isPublic, ...fetchOptions } = options;

  // 최종 요청 주소: isPublic 옵션이 true이면 TEAM_NAME을 제외하고, 아니면 포함시킴
  const url = isPublic
    ? `${BASE_URL}${endpoint}`
    : `${BASE_URL}/${TEAM_NAME}${endpoint}`;

  //요청 옵션 준비
  const finalOptions = {
    ...options,
    headers: {
      'Content-Type': 'application/json', //기본 헤더 설정
      ...options.headers, //사용자가 추가헤더를 전달한 경우 덮어쓰기
    },
  };

  // body 데이터 변환
  if (options.body) {
    finalOptions.body = JSON.stringify(options.body);
  }

  // 서버에 요청
  const response = await fetch(url, finalOptions);

  //서버 응답 에러 처리
  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}));
    throw new Error(
      `API Error: ${response.status} ${response.statusText} - ${JSON.stringify(errorBody)}`,
    );
  }

  //성공 데이터 반환
  if (response.status === 204) {
    return null;
  }
  return await response.json();
}
