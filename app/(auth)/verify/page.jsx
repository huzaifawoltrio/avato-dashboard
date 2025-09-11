'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Shield, ArrowLeft } from 'lucide-react';

export default function VerifyPage() {
  const [verificationCode, setVerificationCode] = useState(['', '', '', '', '', '']);
  const [isResending, setIsResending] = useState(false);

  const handleInputChange = (index, value) => {
    if (value.length <= 1) {
      const newCode = [...verificationCode];
      newCode[index] = value;
      setVerificationCode(newCode);
      
      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`code-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    // Handle backspace
    if (e.key === 'Backspace' && !verificationCode[index] && index > 0) {
      const prevInput = document.getElementById(`code-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const code = verificationCode.join('');
    if (code.length === 6) {
      console.log('Verification code:', code);
    }
  };

  const handleResendCode = async () => {
    setIsResending(true);
    // Simulate API call
    setTimeout(() => {
      setIsResending(false);
      alert('Verification code resent to your email');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
          {/* Back Button */}
          <div className="mb-6">
            <Link href="/auth/register" className="flex items-center text-sm text-gray-600 hover:text-primary transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Registration
            </Link>
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl font-raleway font-bold text-heading">Verify Your Account</h1>
            <p className="text-body mt-2">
              We've sent a 6-digit verification code to{' '}
              <span className="font-medium">john@example.com</span>
            </p>
          </div>

          {/* Verification Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-heading mb-4 text-center">
                Enter Verification Code
              </label>
              <div className="flex justify-center space-x-3">
                {verificationCode.map((digit, index) => (
                  <input
                    key={index}
                    id={`code-${index}`}
                    type="text"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className="w-12 h-12 text-center text-xl font-bold border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    placeholder="0"
                  />
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={verificationCode.join('').length !== 6}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-white bg-primary hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary font-medium transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Verify Account
            </button>
          </form>

          {/* Resend Code */}
          <div className="mt-8 text-center">
            <p className="text-body mb-4">Didn't receive the code?</p>
            <button
              onClick={handleResendCode}
              disabled={isResending}
              className="font-medium text-primary hover:text-orange-600 transition-colors disabled:text-gray-400"
            >
              {isResending ? 'Sending...' : 'Resend Code'}
            </button>
          </div>

          {/* Help Text */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600 text-center">
              The verification code will expire in <span className="font-medium">10 minutes</span>.
              Check your spam folder if you don't see the email.
            </p>
          </div>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              Need help?{' '}
              <a href="#" className="text-primary hover:text-orange-600 transition-colors">
                Contact Support
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}