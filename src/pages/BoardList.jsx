import { Link, useNavigate } from 'react-router-dom';
import './BoardList.css';

// 더미 데이터(Mock Data)
export const DUMMY_POSTS = [
  { id: 1, title: '게시판 첫 번째 글입니다', author: '운영자', date: '2023-11-20', content: '환영합니다! 프리미엄 게시판의 첫 번째 공지사항입니다.' },
  { id: 2, title: '리액트 라우터 설정 질문이요!', author: '초보개발자', date: '2023-11-21', content: 'React Router v6 쓰는데 헷갈리는 부분이 있어서요. useParams는 어떻게 쓰나요?' },
  { id: 3, title: '글래스모피즘(Glassmorphism) UI 적용 관련 팁', author: 'UI장인', date: '2023-11-22', content: '백그라운드 블러 효과를 줄 때 backdrop-filter: blur() 속성을 사용하면 아주 유려한 디자인이 완성됩니다.' },
  { id: 4, title: '저메추', author: '머쉬벤토마토', date: '99991231', content: 'ddp 맛집 뭐 있을까요' },
  { id: 5, title: 'Vite 빌드 속도 정말 빠르네요', author: '프론트엔드', date: '2023-11-24', content: '이전에는 Webpack만 썼는데 Vite로 넘어가니까 HMR 속도가 환상적입니다.' },
];

const BoardList = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="board-container fade-in">
      <header className="board-header">
        <div className="logo-area">
          <h3>벽산 게시판</h3>
        </div>
        <button onClick={handleLogout} className="secondary-btn logout-btn">
          Logout
        </button>
      </header>

      <main className="board-main glass-panel">
        <div className="list-title">
          <h2>Recent Discussions</h2>
          <span className="post-count">{DUMMY_POSTS.length} posts</span>
        </div>

        <div className="post-list">
          {DUMMY_POSTS.map((post) => (
            <Link to={`/board/${post.id}`} key={post.id} className="post-card">
              <div className="post-info">
                <span className="post-id">#{post.id}</span>
                <h3 className="post-title">{post.title}</h3>
              </div>
              <div className="post-meta">
                <span className="post-author">{post.author}</span>
                <span className="post-date">{post.date}</span>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default BoardList;
