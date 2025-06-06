'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

const AuthPage = ({ isSignIn }: { isSignIn: boolean }) => {
  const router = useRouter()

  const handleSwitch = () => {
    router.push(isSignIn ? '/signup' : '/signin')
  }

  const goToLandingPage = () => {
    router.push('/')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white">
      <form className="bg-gray-900 p-6 rounded-lg shadow-lg w-80 space-y-4">
        <h2 className="text-xl font-semibold text-center">
          {isSignIn ? 'Sign In' : 'Sign Up'}
        </h2>

        {!isSignIn && (
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-700 text-white placeholder-gray-400"
              required
            />
          </div>
        )}

        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-700 text-white placeholder-gray-400"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-700 text-white placeholder-gray-400"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 cursor-pointer"
        >
          {isSignIn ? 'Sign In' : 'Sign Up'}
        </button>

        <p className="text-sm text-center mt-2">
          {isSignIn ? "New here?" : "Already have an account?"}{' '}
          <button
            type="button"
            onClick={handleSwitch}
            className="text-blue-400 hover:underline ml-1 cursor-pointer"
          >
            {isSignIn ? 'Create an account' : 'Sign In'}
          </button>
        </p>

        <button
          type="button"
          onClick={goToLandingPage}
          className="w-full mt-2 border border-white py-2 rounded-md hover:bg-white hover:text-black transition cursor-pointer"
        >
          Go to Landing Page
        </button>
      </form>
    </div>
  )
}

export default AuthPage
