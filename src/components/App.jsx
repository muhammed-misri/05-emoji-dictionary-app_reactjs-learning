// our steps:
// 1. create Entry Component
// 2. create props to replace hardcoded data.
// 3a. Import the emojipedia const.
// 3b. Map throught the emojipedia array and render Entry components.

import React from "react";
import Entry from "./Entry";
import emojioedia from "../emojipedia";

// console.log(emojioedia);
// to see emojioedia as an object

// map >>> creactEntry >>> take data from emojiTerm
function creactEntry(emojiTerm) {
  return (
    <Entry
      // don't forget the array unique key .. for mapping
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      description={emojiTerm.meaning}
    />
  );
}
function App(props) {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      {/* mapping here by passing creactEntry func:
      ..... we don't need to write 3 component now
      */}
      <dl className="dictionary">{emojioedia.map(creactEntry)}</dl>
    </div>
  );
}

export default App;
