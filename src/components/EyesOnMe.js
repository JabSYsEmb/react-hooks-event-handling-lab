// Code EyesOnMe Component Here
const EyesOnMe = () => {
    const onBlurHanlder = () => console.log('Hey! Eyes on me!')
    const onFocusHandler = () => console.log('Good!')
    return(
        <button onBlur={onBlurHanlder} onFocus={onFocusHandler}>Eyes on me</button>
    )
}

export default EyesOnMe;