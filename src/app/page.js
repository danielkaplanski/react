// pages/index.js
import UserCard from './components/UserCard';
import HooksExample from './components/HooksExample';

export default function Home() {
  // Przykładowe dane, które przekażemy do komponentu UserCard
  const user = {
    name: 'Jan Kowalski',
    age: 28,
    city: 'Warszawa',
  };

  return (
    <div>
      <h1>Witaj w aplikacji Next.js!</h1>

      {/* Komponent UserCard */}
      <UserCard name={user.name} age={user.age} city={user.city} />
      <UserCard name="Anna Nowak" age={32} city="Kraków" />

      {/* Komponent HooksExample */}
      <HooksExample />
    </div>
  );
}
