function Keyboard() {

    return (
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
    );
    
}

export default Keyboard;