import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";

import HomePage from "./pages/Homepage";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import Navigation from "./component/Navigation";
import SellerNavigation from "./component/SellerNavigation";

import SellerDashboard from "./pages/seller/SellerDashboard";
import AddItem from "./pages/seller/AddItem";
import MyItems from "./pages/seller/MyItems";
import Analytics from "./pages/seller/Analytics";
import RequestPage from "./pages/seller/Request";
import Settings from "./pages/seller/Settings";
import SellerReviewSection from "./pages/seller/SellerReview";
import SellerOrderHistory from "./pages/seller/Order";

import AdminDashboard from "./pages/Admin/AdminDashboard";
import Buyers from "./pages/Admin/Buyers";
import Sellers from "./pages/Admin/Sellers";
import AdminAnalytics from "./pages/Admin/AdminAnalytics";
import AdminLayout from "./pages/Admin/AdminLayout";

import Common from "./pages/Buyer/Common";
import MyOrder from "./pages/Buyer/MyOrder";
import BrowseItems from "./pages/Buyer/BrowseItems";
import Dashboard from "./pages/Buyer/Dashboard";
import MyRequests from "./pages/Buyer/MyRequests";
import Profile from "./pages/Buyer/Profile";
import WishList from "./pages/Buyer/WishList";
import BuyerReview from "./pages/Buyer/BuyerReview";
import BuyerDashboard from "./component/Buyer/BuyerDashboard";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50">
          <Toaster 
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#363636',
                color: '#fff',
              },
              success: {
                style: {
                  background: '#10b981',
                },
              },
              error: {
                style: {
                  background: '#ef4444',
                },
              },
            }}
          />
          
          <Routes>
            <Route path="/" element={<><Navigation /><HomePage /></>} />
            
            <Route path="/login" element={
              <PublicRoute>
                <Navigation />
                <LoginPage />
              </PublicRoute>
            } />
            
            <Route path="/register" element={
              <PublicRoute>
                <Navigation />
                <RegisterPage />
              </PublicRoute>
            } />

            <Route path="/seller" element={
              <ProtectedRoute allowedRoles={['seller']}>
                <Navigate to="/seller/dashboard" replace />
              </ProtectedRoute>
            } />
            
            <Route path="/seller/dashboard" element={
              <ProtectedRoute allowedRoles={['seller']}>
                <SellerNavigation />
                <SellerDashboard />
              </ProtectedRoute>
            } />
            
            <Route path="/seller/add-item" element={
              <ProtectedRoute allowedRoles={['seller']}>
                <SellerNavigation />
                <AddItem />
              </ProtectedRoute>
            } />
            
            <Route path="/seller/my-items" element={
              <ProtectedRoute allowedRoles={['seller']}>
                <SellerNavigation />
                <MyItems />
              </ProtectedRoute>
            } />
            
            <Route path="/seller/analytics" element={
              <ProtectedRoute allowedRoles={['seller']}>
                <SellerNavigation />
                <Analytics />
              </ProtectedRoute>
            } />
            
            <Route path="/seller/request" element={
              <ProtectedRoute allowedRoles={['seller']}>
                <SellerNavigation />
                <RequestPage />
              </ProtectedRoute>
            } />
            
            <Route path="/seller/settings" element={
              <ProtectedRoute allowedRoles={['seller']}>
                <SellerNavigation />
                <Settings />
              </ProtectedRoute>
            } />
            
            <Route path="/seller/review" element={
              <ProtectedRoute allowedRoles={['seller']}>
                <SellerNavigation />
                <SellerReviewSection />
              </ProtectedRoute>
            } />
            
            <Route path="/seller/order" element={
              <ProtectedRoute allowedRoles={['seller']}>
                <SellerNavigation />
                <SellerOrderHistory />
              </ProtectedRoute>
            } />

            <Route path="/buyer" element={
              <ProtectedRoute allowedRoles={['buyer']}>
                <Navigate to="/buyer/dashboard" replace />
              </ProtectedRoute>
            } />
            
            <Route path="/buyer/*" element={
              <ProtectedRoute allowedRoles={['buyer']}>
                <BuyerDashboard />
              </ProtectedRoute>
            } />
            
            <Route path="/buyer/review" element={
              <ProtectedRoute allowedRoles={['buyer']}>
                <BuyerReview />
              </ProtectedRoute>
            } />

            <Route path="/admin" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminLayout />
              </ProtectedRoute>
            }>
              <Route index element={<Navigate to="/admin/dashboard" replace />} />
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="buyers" element={<Buyers />} />
              <Route path="sellers" element={<Sellers />} />
              <Route path="analytics" element={<AdminAnalytics />} />
            </Route>
            
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
