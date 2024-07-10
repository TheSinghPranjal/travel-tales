'use client'
import React from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleLogin = () => {
    console.log('redirect working');
    router.push('/protectedRoutes/dashboard');
  }

  return (
    <>
      <div className="container">
        <div className="card">
          <div>Enter UserName</div>
          <input type="text" />
          <div>Enter Password</div>
          <input type="password" />
          <button onClick={handleLogin}>Login</button>
          <div className="forgot-password">Forgot Password?</div>
        </div>
      </div>
    </>
  );
}
