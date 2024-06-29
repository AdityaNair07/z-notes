import React from "react";
import Background from "./components/Background";
import Foreground from "./components/Foreground";
import NotesCard from "./components/NotesCard";

const App = () => {
  return (
    <div className="relative w-full h-screen bg-zinc-800">
      <Background />
      <Foreground></Foreground>
    </div>
  );
};

export default App;
