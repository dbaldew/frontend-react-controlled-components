import React from 'react';
import './App.css';

function App() {
    return (
        <>
            <div>
                <fieldset className="fieldset">
                    <legend>Gegevens</legend>
                    <div>
                        <label htmlFor="name">Naam:
                            <input className="textinput" type="text" name="name" id="name"/>
                        </label>
                    </div>
                    <div>
                        <label htmlFor="age">Leeftijd
                            <input className="textinput" type="text" name="age" id="age"/></label>
                    </div>
                </fieldset>
            </div>
            <fieldset className="fieldset">
                <legend>Jouw review</legend>
                <div>
                    <p>Opmerkingen</p>
                    <textarea name="comments" id="comments" placeholder="Wat vond je van het recept?" cols="30"
                              rows="10"/>
                </div>
                <input type="checkbox" name="signup" id = "signupbtn"/><label htmlFor="signup">Ik schrijf me in voor de
                nieuwsbrief</label>
                <div>
                    <input type="submit" name="verzenden" id="sendbtn"/>
                </div>
            </fieldset>
        </>
    );
}

export default App;
