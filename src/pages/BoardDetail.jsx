import { useParams, useNavigate } from 'react-router-dom';
import { DUMMY_POSTS } from './BoardList';
import './BoardDetail.css';

const BoardDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // 넘어온 id를 기반으로 게시글 찾기
  const post = DUMMY_POSTS.find((p) => p.id === parseInt(id));

  const handleGoBack = () => {
    navigate('/board');
  };

  if (!post) {
    return (
      <div className="board-container fade-in">
        <div className="glass-panel text-center">
          <h2>Post not found</h2>
          <p>The post you are looking for does not exist.</p>
          <button onClick={handleGoBack} className="primary-btn mt-4">
            Back to List
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="board-container fade-in">
      <div className="detail-actions">
        <button onClick={handleGoBack} className="secondary-btn back-btn">
          &larr; Back to Board
        </button>
      </div>

      <div className="detail-card glass-panel">
        <div className="detail-header">
          <div className="detail-meta">
            <span className="post-id">Post #{post.id}</span>
            <span className="post-date">{post.date}</span>
          </div>
          <h1 className="detail-title">{post.title}</h1>
          <div className="detail-author">
            <div className="author-avatar">{post.author.charAt(0)}</div>
            <span>{post.author}</span>
          </div>
        </div>

        <div className="detail-content">
          <p>{post.content}</p>
        </div>
      </div>
    </div>
  );
};

export default BoardDetail;
