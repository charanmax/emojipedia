import React from "react";
import Emoji from "./emoji";
import emojipedia from "../emojipedia";

function CreateEmoji(emojipedia) {
  return (
    <Emoji
      key={emojipedia.id}
      img={emojipedia.emoji}
      desc={emojipedia.name}
      info={emojipedia.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(CreateEmoji)}</dl>
    </div>
  );
}

export default App;
