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

function App() {
  const [noClicks, setNoClicks] = useState(0);
  const [isValentine, setIsValentine] = useState(false);
  const yesButtonSize = noClicks * 20 + 16;

  const firstImg =
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTZweGpleTRrc2pqeHVodWFsOHkwaXlrMm16cnF6YjgwbHd4YTFtaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0HegFEAiFTit3ioM/giphy.gif";
  const secondImg =
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXFkeDN5MzZ1NXd4MnY1OWp6azRrMHVlaHI1ODR3ZHN3ZGNzbGhlaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fUQ4rhUZJYiQsas6WD/giphy.gif";

  const handleNo = () => {
    setNoClicks((prev) => prev + 1);
  };

  const handleYes = () => {
    setIsValentine(true);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
      }}
    >
      {!isValentine ? (
        <>
          <img src={firstImg} />
          <h1>Mau jadi Valentine-ku nggak? 💘</h1>
          <div>
            <button
              onClick={handleYes}
              style={{
                fontSize: `${yesButtonSize}px`,
                margin: "10px",
                padding: "10px 20px",
                backgroundColor: "green",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Iya
            </button>
            <button
              onClick={handleNo}
              style={{
                fontSize: "16px",
                margin: "10px",
                padding: "10px 20px",
                backgroundColor: "red",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              {noClicks === 0
                ? "Ngga ah"
                : NO_PHRASES[Math.min(noClicks - 1, NO_PHRASES.length - 1)]}
            </button>
          </div>
        </>
      ) : (
        <>
          <img src={secondImg} />
          <div
            style={{
              fontSize: "48px",
              color: "pink",
              fontWeight: "bold",
            }}
          >
            Yay!!! 💖🎉
          </div>
        </>
      )}
    </div>
  );
}

export default App
