import { useParams, Outlet } from 'react-router-dom';

function PostPage() {
  const { id } = useParams();

  // 이 컴포넌트에서 /post/:id 경로에 대한 공통 UI나 데이터를 처리합니다.
  // 예를 들어, 해당 롤링페이퍼의 기본 정보(제목, 배경 등)를 불러와서 보여줄 수 있습니다.

  return (
    <div>
      <h1>롤링페이퍼 ID: {id}</h1>
      {/* 롤링페이퍼의 기본 내용 (모든 하위 라우트에서 공유될 UI) */}
      <p>여기는 PostPage의 공통 내용입니다.</p>

      {/*
        ⬅️ 중요: 여기에 <Outlet />을 추가해야 합니다.
        하위 라우트 (edit, message)의 내용이 이 Outlet 위치에 렌더링됩니다.
        만약 /post/:id 경로만 접근하면 Outlet은 아무것도 렌더링하지 않습니다.
      */}
      <Outlet />

      {/* 예를 들어, '메시지 작성' 버튼 같은 것을 여기에 두면 /post/:id/message로 이동 */}
      {/* <Link to="message">메시지 작성하기</Link> */}
      {/* <Link to="edit">롤링페이퍼 수정하기</Link> */}
    </div>
  );
}

export default PostPage;
