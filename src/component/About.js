import mj from '../assets/mj.jpg'
import React, { useState, useEffect } from 'react';

export default function About() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); 
  }, []);


  return (
    <div className='About'>
    <div className='aboutleft'>
      {loading ? (
        <div className='skeleton skeleton-image'></div> // 스켈레톤 이미지
      ) : (
        <img className='mjlogo' src={mj} alt='minjae'/>
      )}
    </div>
    <div className='aboutright'>
      {loading ? (
        <>
          <div className='skeleton skeleton-title'></div>
          <div className='skeleton skeleton-text'></div>
          <div className='skeleton skeleton-text'></div>
          <div className='skeleton skeleton-text'></div> 
        </>
      ) : (
        <>
          <p className='devinfo'>🥕 Developer Information</p>
          <div className='infolistbox'>
            <li className='infolist'>
              <a href='https://github.com/mj950313'>Github : https://github.com/mj950313</a>
            </li>
            <li className='infolist'>
              <a href='https://velog.io/@mj950313'>Blog : https://velog.io/@mj950313</a>
            </li>
            <li className='infolist'>Email : mj950313@naver.com</li>
          </div>
        </>
      )}
    </div>   
  </div>
);
};
