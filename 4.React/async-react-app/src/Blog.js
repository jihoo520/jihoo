import { useEffect, useState } from 'react';
import axios from 'axios';

export const BlogApp = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 게시물 불러오기
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setPosts(response.data.slice(0, 5)); // 예시로 처음 5개만 사용
        setLoading(false);
      })
      .catch((err) => {
        setError('데이터 불러오기 실패: ' + err.message);
        setLoading(false);
      });
  }, []);

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  if (loading) return <p>로딩 중입니다...</p>;
  if (error) return <p>에러: {error}</p>;

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h2>블로그 게시판</h2>

      <ul>
        {posts.map((post) => (
          <li key={post.id} style={{ marginBottom: '10px' }}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
            <button onClick={() => deletePost(post.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
