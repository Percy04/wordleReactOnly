import React, {useEffect, useState} from 'react';
import fiveLetterWords from './assets/fiveLetterWords';
import Keyboard from './Keyboard.jsx';

function MyWordle() {

    const [words, setWords] = useState([]);
    const [solved, setSolved] = useState(false)
    const [chosenWord, setChosenWord] = useState();


    useEffect(() => {
        const randomWord = fiveLetterWords[Math.floor(Math.random() * fiveLetterWords.length)];
        setChosenWord(randomWord);
        console.log("chosen word: " + randomWord);
    }, []);


    useEffect (() => {
        displaySolvedRow();
        if (words.length === 6) {
            alert('LOST. Word was: ' + chosenWord);
            document.querySelector(".solution").innerHTML = chosenWord;
        } else {
            let index = words.length;
            let currWord = words[index] || "";

            const handleKeyPress = (e) => {
                if (isAlphabet(e.key)) {
                    if (currWord.length < 5) {
                        currWord += e.key;
                        displayCurrWord(currWord, index);
                    }
                } 
                else if (e.key === "Enter") {
                    if (!validateWord(currWord)) {
                        alert('invalid word');
                    } else {
                        setWords((w) => [...w, currWord]);
                    }
                }
                else if (e.key === "Backspace") {
                    currWord = currWord.substring(0, currWord.length-1);
                    displayCurrWord(currWord, index);
                }
            }
                
            document.addEventListener('keydown', handleKeyPress);
    
            return (() => {
                document.removeEventListener('keydown', handleKeyPress);
            });
        }
    }, [words]);


    useEffect(() => {
        if (solved) {
            alert("Congragulations, you got it!");
            window.location.reload();
        }
    }, [solved]);


    function displaySolvedRow() {
        const lastWord = words[words.length-1];
        if (lastWord === undefined) return;

        for (let i=0; i<5; i++) {
            const gridItem = document.querySelector(`.row-${words.length-1} .col-${i}`);
            const keyboardKey = document.getElementById(`${lastWord[i]}`);
            if (lastWord[i] === chosenWord[i]) {
                gridItem.classList.add("correctPosition");
                keyboardKey.classList.add("correctPosition");
            } else if (chosenWord.includes(lastWord[i])) {
                gridItem.classList.add("wrongPosition");
                keyboardKey.classList.add("wrongPosition");
            } else {
                gridItem.classList.add("noPosition");
                keyboardKey.classList.add("noPosition");
            }
        }
    }

    function isAlphabet(key) {
        if (/^[a-zA-z]$/.test(key)) {
            return true;
        }
        return false;
    }

    function validateWord(word) {
        //Length
        if (word.length < 5) {
            console.log("Too small");
            return false;
        }

        if (word === chosenWord) {
            setSolved(true);
            return true;
        }

        if (fiveLetterWords.includes(word)) {
            console.log("Valid word");
            return true;
        } else {
            console.log("Invalid word");
            return false;
        }
    }


    function displayCurrWord(currWord, row) {
        console.log("Display letter");
        let i = 0;
        for (i=0; i<currWord.length;i++) {
            const gridItem = document.querySelector(`.row-${row} .col-${i}`);
            gridItem.innerHTML = currWord[i].toUpperCase();
        }

        while (i < 5) {
            const leftItems = document.querySelector(`.row-${row} .col-${i}`);
            leftItems.innerHTML = "";
            i++;
        }
    }


    return (
        <div className="container">
            <div className="solution"></div>

            <div className="grid-container">
                <div className="row row-0">
                    <div className="grid  col-0"></div>
                    <div className="grid  col-1"></div>
                    <div className="grid  col-2"></div>
                    <div className="grid  col-3"></div>
                    <div className="grid  col-4"></div>
                </div>

                <div className="row row-1">
                    <div className="grid  col-0"></div>
                    <div className="grid  col-1"></div>
                    <div className="grid  col-2"></div>
                    <div className="grid  col-3"></div>
                    <div className="grid  col-4"></div>
                </div>

                <div className="row row-2">
                    <div className="grid  col-0"></div>
                    <div className="grid  col-1"></div>
                    <div className="grid  col-2"></div>
                    <div className="grid  col-3"></div>
                    <div className="grid  col-4"></div>
                </div>

                <div className="row row-3">
                    <div className="grid  col-0"></div>
                    <div className="grid  col-1"></div>
                    <div className="grid  col-2"></div>
                    <div className="grid  col-3"></div>
                    <div className="grid  col-4"></div>
                </div>

                <div className="row row-4">
                    <div className="grid  col-0"></div>
                    <div className="grid  col-1"></div>
                    <div className="grid  col-2"></div>
                    <div className="grid  col-3"></div>
                    <div className="grid  col-4"></div>
                </div>        

                <div className="row row-5">
                    <div className="grid  col-0"></div>
                    <div className="grid  col-1"></div>
                    <div className="grid  col-2"></div>
                    <div className="grid  col-3"></div>
                    <div className="grid  col-4"></div>
                </div>

            </div>

        <div className="keyboard-container">
            <div className="row-0">
                <button className="kgrid" id="q">Q</button>
                <button className="kgrid" id="w">W</button>
                <button className="kgrid" id="e">E</button>
                <button className="kgrid" id="r">R</button>
                <button className="kgrid" id="t">T</button>
                <button className="kgrid" id="y">Y</button>
                <button className="kgrid" id="u">U</button>
                <button className="kgrid" id="i">I</button>
                <button className="kgrid" id="o">O</button>
                <button className="kgrid" id="p">P</button>
            </div>
    
            <div className="row-1">
                <button className="kgrid" id="a">A</button>
                <button className="kgrid" id="s">S</button>
                <button className="kgrid" id="d">D</button>
                <button className="kgrid" id="f">F</button>
                <button className="kgrid" id="g">G</button>
                <button className="kgrid" id="h">H</button>
                <button className="kgrid" id="j">J</button>
                <button className="kgrid" id="k">K</button>
                <button className="kgrid" id="l">L</button>
            </div>
    
            <div className="row-2">
                <button className="kgrid" id="Enter">Enter</button>
                <button className="kgrid" id="z">Z</button>
                <button className="kgrid" id="x">X</button>
                <button className="kgrid" id="c">C</button>
                <button className="kgrid" id="v">V</button>
                <button className="kgrid" id="b">B</button>
                <button className="kgrid" id="n">N</button>
                <button className="kgrid" id="m">M</button>
                <button className="kgrid" id="Backspace">Back</button>
            </div>
            </div>
        </div>
    );

}

export default MyWordle