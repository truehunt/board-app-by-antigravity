import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import BoardList from './pages/BoardList';
import BoardDetail from './pages/BoardDetail';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/board" element={<BoardList />} />
        <Route path="/board/:id" element={<BoardDetail />} />
        {/* 잘못된 경로는 로그인 프론트로 리다이렉트 */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
