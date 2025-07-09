'use client';

import { useState } from 'react';
import { auth } from '@/lib/firebase';

export default function DeleteAccount() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleDeleteAccount = async () => {
    if (!window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      return;
    }

    setIsLoading(true);
    setError(null);
    
    try {
      const user = auth.currentUser;
      if (!user) {
        throw new Error('No user is currently signed in');
      }

      const idToken = await user.getIdToken();
      
      const response = await fetch('/api/delete-account', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ idToken }),
      });

      if (!response.ok) {
        throw new Error('Failed to delete account');
      }

      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while deleting your account');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-8">
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-gray-900">Delete Account</h2>
          <p className="text-gray-600">
            Once you delete your account, all of your data will be permanently removed. This action cannot be undone.
          </p>
        </div>

        {error && (
          <div className="p-4 bg-red-50 border border-red-100 rounded-lg text-red-700">
            <p className="text-sm font-medium">{error}</p>
          </div>
        )}

        {success ? (
          <div className="p-4 bg-green-50 border border-green-100 rounded-lg">
            <p className="text-sm font-medium text-green-700">
              Your account has been successfully deleted.
            </p>
          </div>
        ) : (
          <div className="pt-4">
            <button
              onClick={handleDeleteAccount}
              disabled={isLoading}
              className={`
                w-full px-4 py-3 text-sm font-medium rounded-lg
                transition-colors duration-200
                ${isLoading 
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                  : 'bg-red-50 text-red-600 hover:bg-red-100 active:bg-red-200'
                }
              `}
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                'Delete Account'
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
} 