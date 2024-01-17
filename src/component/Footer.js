import React, { useState, useEffect } from 'react';
        
export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  // useEffect를 사용하여 컴포넌트가 마운트되면 setInterval을 시작합니다.
  useEffect(() => {
    const intervalId = setInterval(() => {
      // 매 초마다 year를 현재 년도로 업데이트
      setYear(new Date().getFullYear());
    }, 1000); // 1000 밀리초마다 업데이트 (1초)
    
    // 컴포넌트가 언마운트될 때 clearInterval을 사용하여 타이머를 정리합니다.
    return () => clearInterval(intervalId);
  }, []); // useEffect의 두 번째 매개변수로 빈 배열을 전달하여 한 번만 실행되도록 합니다.

  return (
      <div className='footer'>
        <div>
          <a href='https://github.com/mj950313'>Github Repository</a>
        </div>
        <div>
          <a href='https://github.com/mj950313'>{year} Minjae</a>
        </div>
      </div>
  );
}
