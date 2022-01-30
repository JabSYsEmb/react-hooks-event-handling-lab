// Code Keypad Component Here

const Keypad = ({}) => {
    const passwordInputChangeHanlder = () => console.log('Entering password...')
    return(
        <input type="password" onChange={passwordInputChangeHanlder}/>
    )
}

export default Keypad;