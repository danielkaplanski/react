"use client";
// components/HooksExample.js
import React, { useState, useReducer, useEffect, useContext, useRef, createContext } from 'react';

// Tworzymy kontekst do użycia z useContext
const UserContext = createContext();

function HooksExample() {
  // useState: Licznik
  const [count, setCount] = useState(0);

  // useReducer: Stan z kilkoma akcjami
  const initialState = { value: 0 };
  const reducer = (state, action) => {
    switch (action.type) {
      case 'increment':
        return { value: state.value + 1 };
      case 'decrement':
        return { value: state.value - 1 };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  // useEffect: Aktualizacja tytułu strony
  useEffect(() => {
    document.title = `Licznik: ${count}`;
    console.log('useEffect: Aktualizacja tytułu strony');
  }, [count]);

  // useRef: Referencja do pola input
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <UserContext.Provider value="Jan Kowalski">
      <div>
        <h2>Przykład użycia różnych hooków</h2>

        {/* useState */}
        <div>
          <h3>useState - Licznik</h3>
          <p>Licznik: {count}</p>
          <button onClick={() => setCount(count + 1)}>Zwiększ</button>
          <button onClick={() => setCount(count - 1)}>Zmniejsz</button>
        </div>

        {/* useReducer */}
        <div>
          <h3>useReducer - Zaawansowane zarządzanie stanem</h3>
          <p>Wartość: {state.value}</p>
          <button onClick={() => dispatch({ type: 'increment' })}>Zwiększ</button>
          <button onClick={() => dispatch({ type: 'decrement' })}>Zmniejsz</button>
        </div>

        {/* useEffect */}
        <div>
          <h3>useEffect - Aktualizacja tytułu strony</h3>
          <p>Zajrzyj do konsoli, aby zobaczyć logi z useEffect!</p>
        </div>

        {/* useRef */}
        <div>
          <h3>useRef - Referencja do inputa</h3>
          <input ref={inputRef} type="text" placeholder="Kliknij przycisk, aby ustawić focus" />
          <button onClick={focusInput}>Ustaw focus na input</button>
        </div>

        {/* useContext */}
        <UserDisplay />
      </div>
    </UserContext.Provider>
  );
}

// Komponent korzystający z useContext
function UserDisplay() {
  const userName = useContext(UserContext);
  return (
    <div>
      <h3>useContext - Użytkownik</h3>
      <p>Witaj, {userName}!</p>
    </div>
  );
}

export default HooksExample;
