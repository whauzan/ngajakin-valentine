import { useState } from 'react'
import './App.css'

const NO_PHRASES = [
  "No 💔",
  "Oke, gapapa... *nangis di pojokan* 😭",
  "Yaudah deh, aku kuat... *tapi enggak juga* 😢",
  "Fine, aku bakal move on... suatu hari nanti 🤡",
  "Ouch, sakitnya sampe ke hati 💀",
  "Gapapa, aku tetep ngefans kok 🥲",
  "BRB, uninstall Valentine... 😔",
];

const ACTIVITIES = [
  "Nonton film bareng 🎬",
  "Dinner romantis 🍽️",
  "Jalan-jalan santai 🚶‍♂️",
  "Ngopi bareng ☕",
  "Main game bareng 🎮"
];

const TIMES = [
  "Malam ini 🌙",
  "Besok 📅",
  "Weekend ini 🎉",
  "Minggu depan 📆",
];

function App() {
  const [noClicks, setNoClicks] = useState(0);
  const [isValentine, setIsValentine] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const yesButtonSize = noClicks * 20 + 16;

  const firstImg = "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTZweGpleTRrc2pqeHVodWFsOHkwaXlrMm16cnF6YjgwbHd4YTFtaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0HegFEAiFTit3ioM/giphy.gif";
  const secondImg = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDdtY2JrY2Q3OW00Z2lxNnBxbXZ4Ynl1bWR1Y3E2dWF0Z2QyYjh6eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/T86i6yDyOYz7J6dPhf/giphy.gif";

  const handleNo = () => {
    setNoClicks((prev) => prev + 1);
  };

  const handleYes = () => {
    setIsValentine(true);
  };

  const handleActivitySelect = (activity: string) => {
    setSelectedActivity(activity);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const renderInitialQuestion = () => (
    <div className="content-wrapper">
      <img src={firstImg} alt="Valentine" className="gif-image" />
      <h1 className="title">Mau jadi Valentine-ku nggak? 💘</h1>
      <div className="button-container">
        <button
          onClick={handleYes}
          className="yes-button"
          style={{ fontSize: `${yesButtonSize}px` }}
        >
          Iya
        </button>
        <button
          onClick={handleNo}
          className="no-button"
        >
          {noClicks === 0
            ? "Ngga ah"
            : NO_PHRASES[Math.min(noClicks - 1, NO_PHRASES.length - 1)]}
        </button>
      </div>
    </div>
  );

  const renderActivitySelection = () => (
    <div className="content-wrapper">
      <h1 className="title">Kita mau ngapain nih? 😊</h1>
      <div className="options-container">
        {ACTIVITIES.map((activity) => (
          <button
            key={activity}
            onClick={() => handleActivitySelect(activity)}
            className="option-button"
          >
            {activity}
          </button>
        ))}
      </div>
    </div>
  );

  const renderTimeSelection = () => (
    <div className="content-wrapper">
      <h1 className="title">Kapan kita ketemuan? 📅</h1>
      <div className="options-container">
        {TIMES.map((time) => (
          <button
            key={time}
            onClick={() => handleTimeSelect(time)}
            className="option-button"
          >
            {time}
          </button>
        ))}
      </div>
    </div>
  );

  const renderFinalMessage = () => (
    <div className="content-wrapper">
      <img src={secondImg} alt="Celebration" className="gif-image" />
      <div className="final-message">
        <div className="celebration-text">
          Yay!!! 💖🎉
        </div>
        <div className="result-text">
          Ketemu {selectedTime?.toLowerCase()} ya! 
          <br />
          Ga sabar buat {selectedActivity?.toLowerCase()} bareng kamu! 🥰
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    if (!isValentine) return renderInitialQuestion();
    if (!selectedActivity) return renderActivitySelection();
    if (!selectedTime) return renderTimeSelection();
    return renderFinalMessage();
  };

  return (
    <div className="valentine-container">
      {renderContent()}
    </div>
  );
}

export default App
