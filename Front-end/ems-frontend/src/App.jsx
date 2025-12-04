import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import EmployeeComponent from './components/EmployeeComponent';
import LoginComponent from './components/LoginComponent';
import ProtectedRoute from './components/ProtectedRoute';
import { ThemeProvider } from './components/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<LoginComponent />} />
          
          {/* Protected Routes */}
          <Route path="/employees" element={
              <ProtectedRoute>
                <ListEmployeeComponent />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/add-employee" 
            element={
              <ProtectedRoute>
                <EmployeeComponent />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/edit-employee/:id" 
            element={
              <ProtectedRoute>
                <EmployeeComponent />
              </ProtectedRoute>
            } 
          />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;