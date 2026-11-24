import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";

// Customer Auth - Lazy Loaded
const Login = lazy(() => import("../features/auth/Login/Login"));

// Smooth loading indicator fallback
const PageLoader = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50">
    <div className="relative flex items-center justify-center">
      <div className="w-14 h-14 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
      <div className="absolute w-3 h-3 bg-indigo-600 rounded-full animate-ping"></div>
    </div>
    <p className="mt-4 text-sm font-semibold text-slate-700 tracking-wide">
      Loading Cartify...
    </p>
  </div>
);

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* Default entry redirects to login */}
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          
          {/* Fallback for undefined routes */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;
