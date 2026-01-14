// rafce
import React from 'react'

// 메인 페이지에서 사용할 전체 기본 레이아웃이 되는 컴포넌트
const DefaultLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white flex justify-center">
      {/* 실제 앱 영역 */}
      <div
        className="
          w-full max-w-[430px]
          px-4
          pb-24
        "
      >
        {children}
      </div>
    </div>
  );
};

export default DefaultLayout