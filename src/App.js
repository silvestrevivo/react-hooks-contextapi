import React from 'react';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import ThemeToogle from './components/ThemeToogle';
import ThemeContextProvider from './contexts/ThemeContext'

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <BookList />
        <ThemeToogle />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
