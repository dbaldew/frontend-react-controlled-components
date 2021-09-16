import React from 'react';
import './App.css';

function App() {
    const [name, setName] = React.useState("")
    const [age, setAge] = React.useState("")
    const [comment, setComment] = React.useState("")
    const [signUp, toggleSignup] = React.useState(false)
    const [clicked, toggleClicked] = React.useState(false)

    function handleClick(e){
        console.log({name},{age},{comment},{signUp});
        toggleClicked(!clicked)
        e.preventDefault()
    }

    return (
        <>
            <div>
                <form id="form" onSubmit={handleClick}>
                    <div>
                        <fieldset className="fieldset">
                            <legend>Gegevens</legend>
                            <div>
                                <label htmlFor="name">Naam:
                                    <input
                                        className="textinput"
                                        type="text"
                                        name="name"
                                        id="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </label>
                            </div>
                            <div>
                                <label htmlFor="age">Leeftijd
                                    <input
                                        className="textinput"
                                        type="text"
                                        name="age"
                                        id="age"
                                        value={age}
                                        onChange={(e) => setAge(e.target.value)}
                                    /></label>
                            </div>
                        </fieldset>
                    </div>
                    <fieldset className="fieldset">
                        <legend>Jouw review</legend>
                        <div>
                            <p>Opmerkingen</p>
                            <textarea
                                name="comments"
                                id="comments"
                                placeholder="Wat vond je van het recept?"
                                cols="30"
                                rows="10"
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                            />
                        </div>
                        <input
                            type="checkbox"
                            name="signup"
                            id="signupbtn"
                            value={signUp}
                            onClick={(e) => toggleSignup(!signUp)}
                        />
                        <label htmlFor="signup">Ik schrijf me in voor de
                            nieuwsbrief</label>
                        <div>
                            <input
                                type="submit"
                                name="verzenden"
                                id="sendbtn"
                            />
                        </div>
                    </fieldset>
                </form>
            </div>
        </>
    );
}

export default App;
