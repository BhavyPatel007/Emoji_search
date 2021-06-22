import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import Picker from 'emoji-picker-react';
import Grid from '@material-ui/core/Grid';





const useStyles = makeStyles((theme) => ({
    main: {
        // background: "#4568DC",
        // background: "-webkit-linear-gradient(to right, #B06AB3, #4568DC)",
        backgroundImage: "linear-gradient(to left bottom, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)",
        maxHeight: "100%",
        height: "100vh",
        width: "100vw",
        position: "reletive",
    },
    picker: {
        textAlign: "center",
        display: "inline-block",
        marginTop: "3%",
        marginLeft: "15%",

    },
    textbox: {
        backgroundColor: "#fff",
        width: "auto",
        height: "auto",
        margin: "auto 2%",
        marginTop: "2%",
        padding: "1%",
        borderRadius: "10px",
        fontSize: "25px",
        textAlign: "center",
        fontFamily: "Source Sans Pro, Arial, sans-serif",
    },
    emoji: {
        backgroundColor: "#fff",
        width: "200px",
        height: "auto",
        margin: "auto",
        marginTop: "4%",
        padding: "1% 0",
        borderRadius: "10px",
        fontSize: "120px",
        textAlign: "center",
    },


}));

const Home = () => {
    const classes = useStyles();
    const [chosenEmoji, setChosenEmoji] = useState(null);

    const onEmojiClick = (event, emojiObject) => {
        setChosenEmoji(emojiObject);
    };

    return (
        <div className={classes.main}>
            <div className={classes.picker}>
                <Picker onEmojiClick={onEmojiClick} pickerStyle={{ width: '80%' }} />
            </div>
            <div>
                {chosenEmoji ? (
                    // <span >You chose: <span >{chosenEmoji.emoji}</span>
                    //     Name:  {chosenEmoji.names.join(", ")}</span>
                    <div>
                        {/* <span className={classes.emoji}>{chosenEmoji.emoji}</span>
                        <div className={classes.textbox}>
                            <b> Name:  {chosenEmoji.names.join(", ")}</b>
                        </div> */}
                        <Grid container>
                            <Grid item xs={12}>
                                <div className={classes.emoji}>{chosenEmoji.emoji}</div>
                            </Grid>
                            <Grid item xs={12}>
                                <div className={classes.textbox}><b > Name:  {chosenEmoji.names.join(", ")}</b></div>
                            </Grid>
                        </Grid>
                    </div>
                ) : (
                    <span>No emoji Chosen</span>
                )}
            </div>
        </div>
    )
}

export default Home
