import './App.css'
import { BrowserRouter as Router, Routes, Route, useNavigate }
  from 'react-router-dom';
import { Player } from './components/Searchbar'
import { useState, createContext, useContext, useEffect } from 'react'
import SearchPage from './components/SearchPage';
import PlayerProfile from './components/PlayerProfile';
import PieChart from './components/PieChart';
import { ReactNode } from 'react';
export interface PlayerContextType {
  player: Player | null;
  setPlayer: (player: Player) => void;
}

export const PlayerContext = createContext<PlayerContextType | null>(null);

export const PlayerProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [player, setPlayer] = useState<Player | null>(null);

  return <PlayerContext.Provider value={{ player, setPlayer }}>{children}</PlayerContext.Provider>;
};

function App() {
  const context = useContext(PlayerContext);
  const [playerPath, setPlayerPath] = useState<string>();
  const navigate = useNavigate();
  const showStats = () => {
    const urlPath = '/' + context?.player?.fullName.replace(/\s/g, '_');
    setPlayerPath(urlPath);
    navigate(urlPath);
  }
  const data = [
    { name: "Mark", value: 90 },
    { name: "Robert", value: 12 },
    { name: "Emily", value: 34 },
    { name: "Marion", value: 53 },
    { name: "Nicolas", value: 58 },
  ]

  return (
    <Routes>
      <Route path='/' element={<SearchPage onDataReceived={showStats} />} />
      <Route path={playerPath} element={<PlayerProfile />} />
    </Routes>

  )
}

export default App
