//fetch 를 사용하여, 외부 api에서 데이터를 가져와 화면에 랜더링하는
//프로그램 만들기

//외부 api를 호출하면 데이터를 가져온다(https://jsonplaceholder.typicode.com/users)
//데이터를 가져오는 동안 로딩 상태를 표시한다
//api 요청 실패 시, 에러 메시지를 표시해야한다
//가져온 데어터를 화면에 목록 형채로 출력한다
//사용자의 이름과 이메일 주소를 출력해 주세요

import React, { useEffect, useState } from 'react';

export const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        if (!res.ok) {
          throw new Error('데이터를 불러오는데 실패했습니다.');
        }
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>에러: {error}</p>;

  return (
    <div>
      <h1>사용자 목록</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
