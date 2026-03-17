import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // 더미 인증 (실제 로직 없이 폼 검증만)
    if (username.trim() && password.trim()) {
      // 로그인 성공 시 보드 메인으로 리다이렉트
      navigate('/board');
    }
  };

  return (
    <div className="login-wrapper fade-in">
      <div className="background-elements">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>

      <div className="login-card glass-panel">
        <div className="login-header">
          <h1>벽산 게시판</h1>
          <p>로그인 하세요</p>
        </div>

        <form className="login-form" onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="username">아이디</label>
            <input
              type="text"
              id="username"
              className="input-field"
              placeholder="아이디를 입력하세요"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              id="password"
              className="input-field"
              placeholder="패스워드를 입력하세요"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="primary-btn login-btn">
            로그인
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
