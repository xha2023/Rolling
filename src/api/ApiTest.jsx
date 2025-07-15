import { useEffect } from 'react';

function ApiTest() {
  useEffect(() => {
    // 테스트할 전체 URL을 직접 변수로 지정합니다.
    const testUrl = 'https://rolling-api.vercel.app/1-1/recipients/';

    const simpleTest = async () => {
      try {
        console.log(`요청 시작: ${testUrl}`);

        // 브라우저의 기본 fetch 함수를 직접 사용합니다.
        const response = await fetch(testUrl);

        // fetch가 성공했는지 확인합니다.
        if (!response.ok) {
          throw new Error(`서버 에러: ${response.status}`);
        }

        // 응답을 JSON으로 변환합니다.
        const data = await response.json();

        console.log('✅ 단순 fetch 테스트 성공:', data);
      } catch (error) {
        console.error('❌ 단순 fetch 테스트 실패:', error);
      }
    };

    simpleTest();
  }, []); // 컴포넌트가 로드될 때 한 번만 실행

  return <div>단순 API GET 테스트 중... 콘솔을 확인하세요.</div>;
}

export default ApiTest;
