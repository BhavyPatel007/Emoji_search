import React, { useState } from 'react';
import Picker from 'emoji-picker-react';

const EmojiSearch = () => {
    const [chosenEmoji, setChosenEmoji] = useState(null);

    const onEmojiClick = (event, emojiObject) => {
        setChosenEmoji(emojiObject);
    };

    return (
        <div>

            <Picker onEmojiClick={onEmojiClick} pickerStyle={{ width: '100%' }} />
            <div>
                {chosenEmoji ? (
                    <span >You chose: <span style={{ fontSize: "250px" }} >{chosenEmoji.emoji}</span>
                        Name:  {chosenEmoji.names.join(", ")}</span>
                ) : (
                    <span>No emoji Chosen</span>
                )}
            </div>
        </div >
    );
};
export default EmojiSearch;