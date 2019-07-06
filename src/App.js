import React from 'react';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import ThemeToogle from './components/ThemeToogle';
import ThemeContextProvider from './contexts/ThemeContext';
import AuthContextProvider from './contexts/AuthContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookList />
          <ThemeToogle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
