import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [showCodeInput, setShowCodeInput] = useState(false);
  const [isCodeCorrect, setIsCodeCorrect] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const API_URL = "http://localhost:5000";

  // === 1) Emailga kod yuborish ===
  const sendCodeToServer = async () => {
    try {
      const response = await fetch(`${API_URL}/sendEmail`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!response.ok) throw new Error(`Server error: ${response.status}`);
      const data = await response.json();
      return data.success;
    } catch (error) {
      setErrorMessage("Server bilan bog‘lanishda xato. Backend ishlayotganini tekshiring.");
      return false;
    }
  };

  // === 2) Kodni tekshirish ===
  const verifyCodeWithServer = async () => {
    try {
      const response = await fetch(`${API_URL}/verifyCode`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, code: verificationCode }),
      });
      if (!response.ok) throw new Error(`Server error: ${response.status}`);
      const data = await response.json();
      return data;
    } catch (error) {
      setErrorMessage("Server bilan bog‘lanishda xato.");
      return { success: false, valid: false };
    }
  };

  // === 3) Form submit ===
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');

    if (!showCodeInput) {
      if (!email.includes('@') || !email.includes('.')) {
        setErrorMessage("Iltimos, to‘g‘ri email kiriting.");
        setIsLoading(false);
        return;
      }

      const sent = await sendCodeToServer();
      if (sent) {
        setShowCodeInput(true);
        setIsCodeCorrect(null);
        setVerificationCode('');
      } else {
        setErrorMessage("Kod yuborishda xatolik yuz berdi.");
      }
    } else {
      if (verificationCode.length !== 4) {
        setErrorMessage("Iltimos, 4 xonali kodni kiriting.");
        setIsLoading(false);
        return;
      }

      const result = await verifyCodeWithServer();
      if (result.success && result.valid) {
        setIsCodeCorrect(true);
        alert("Muvaffaqiyatli kirildi!");
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userEmail", email);
        navigate("/");
      } else {
        setIsCodeCorrect(false);
        setErrorMessage("Noto‘g‘ri kod. Qayta urinib ko‘ring.");
      }
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-lg">
        <h3 className="text-lg font-semibold text-red-500 text-center mb-2">olcha</h3>
        <h2 className="text-xl font-semibold text-center text-gray-900 mb-6">
          Войти или создать профиль
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email input */}
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2.5 bg-gray-50">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrorMessage('');
              }}
              className="flex-1 text-center text-base font-medium bg-transparent focus:outline-none"
              placeholder="example@gmail.com"
              disabled={isLoading || showCodeInput}
              required
            />
          </div>

          {/* Kod input */}
          {showCodeInput && (
            <div className="space-y-3">
              <div className="text-center text-gray-600 text-sm">Tasdiqlash kodi</div>
              <input
                type="text"
                value={verificationCode}
                onChange={(e) =>
                  setVerificationCode(e.target.value.replace(/\D/g, '').slice(0, 4))
                }
                placeholder="0000"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-center text-base font-semibold focus:outline-none focus:ring-1 focus:ring-blue-500"
                maxLength="4"
                required
                disabled={isLoading}
              />
              {isCodeCorrect !== null && (
                <div
                  className={`text-center text-xs font-medium ${
                    isCodeCorrect ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {isCodeCorrect ? 'Qabul qilindi' : "Noto‘g‘ri kod"}
                </div>
              )}
            </div>
          )}

          {/* Xatolik */}
          {errorMessage && (
            <div className="text-center text-red-600 text-xs font-medium">
              {errorMessage}
            </div>
          )}

          {/* Tugma */}
          <button
            type="submit"
            className="w-full btn btn-error hover:bg-red-500 text-white py-2.5 rounded-lg font-medium text-sm transition-colors duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
            disabled={
              isLoading ||
              isCodeCorrect ||
              (!showCodeInput && email.length < 5) ||
              (showCodeInput && verificationCode.length !== 4)
            }
          >
            {isLoading ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Yuklanmoqda...
              </div>
            ) : !showCodeInput ? (
              "Kodni emailga yuborish"
            ) : (
              "Tasdiqlash"
            )}
          </button>
        </form>

        <p className="text-[10px] text-gray-500 text-center mt-4 leading-tight">
          Продолжая, я соглашаюсь с политикой обработки персональных данных и офертой Uzum ID
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
