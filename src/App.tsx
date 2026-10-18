/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';

// Lazy-loaded routes to minimize initial bundle size and speed up FCP / LCP
const About = lazy(() => import('./pages/About'));
const Products = lazy(() => import('./pages/Products'));
const Installation = lazy(() => import('./pages/Installation'));
const Solutions = lazy(() => import('./pages/Solutions'));
const BlogList = lazy(() => import('./pages/BlogList'));
const BlogPostDetail = lazy(() => import('./pages/BlogPostDetail'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Contact = lazy(() => import('./pages/Contact'));

// Loading Fallback with industrial blueprint aesthetic
function PageLoader() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-8">
      <div className="relative w-12 h-12 flex items-center justify-center mb-4">
        <div className="absolute inset-0 border-2 border-slate-200 border-t-[#00B4D8] rounded-full animate-spin"></div>
        <span className="text-[#00B4D8] font-bold text-lg font-heading">Ω</span>
      </div>
      <p className="text-xs font-mono text-slate-500 uppercase tracking-widest animate-pulse">
        Chargement des spécifications techniques...
      </p>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route 
            path="presentation" 
            element={
              <Suspense fallback={<PageLoader />}>
                <About />
              </Suspense>
            } 
          />
          <Route 
            path="produits" 
            element={
              <Suspense fallback={<PageLoader />}>
                <Products />
              </Suspense>
            } 
          />
          <Route 
            path="installation" 
            element={
              <Suspense fallback={<PageLoader />}>
                <Installation />
              </Suspense>
            } 
          />
          <Route 
            path="solutions" 
            element={
              <Suspense fallback={<PageLoader />}>
                <Solutions />
              </Suspense>
            } 
          />
          <Route 
            path="blog" 
            element={
              <Suspense fallback={<PageLoader />}>
                <BlogList />
              </Suspense>
            } 
          />
          <Route 
            path="blog/:slug" 
            element={
              <Suspense fallback={<PageLoader />}>
                <BlogPostDetail />
              </Suspense>
            } 
          />
          <Route 
            path="faq" 
            element={
              <Suspense fallback={<PageLoader />}>
                <FAQ />
              </Suspense>
            } 
          />
          <Route 
            path="contact" 
            element={
              <Suspense fallback={<PageLoader />}>
                <Contact />
              </Suspense>
            } 
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
