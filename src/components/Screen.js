

const Screen = ({welcome, setWelcome }) => {
    return (
        <div>
            <h1>Welcome Screen</h1>

            <p>By continuing you agree in sharing your ip and location. Keep in mind that it is necessary for some of the funcionality</p>
            {/* <p>No? hadle no location share</p> */}


            <button onClick={() => setWelcome(false)}>Go</button>
        </div>
    )
}

export default Screen
