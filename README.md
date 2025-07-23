# 파트2 1팀 기초 프로젝트
// 임시 변경: PR테스트용 

## 환경변수 설정

### 카카오 공유 기능 사용을 위한 설정

1. `.env.example` 파일을 복사해서 `.env` 파일을 생성하세요:
```bash
cp .env.example .env
```

2. [카카오 개발자 콘솔](https://developers.kakao.com/console/app)에서 앱을 생성하고 JavaScript 키를 발급받으세요.

3. `.env` 파일에서 `VITE_KAKAO_API_KEY`에 발급받은 키를 입력하세요:
```env
VITE_KAKAO_API_KEY=your_actual_kakao_api_key
```

4. 카카오 개발자 콘솔에서 **플랫폼 설정 > Web > 사이트 도메인**에 개발 서버 도메인을 추가하세요:
   - http://localhost:5173
   - http://127.0.0.1:5173

⚠️ **주의**: `.env` 파일은 Git에 커밋되지 않습니다. API 키를 소스코드에 직접 작성하지 마세요!
