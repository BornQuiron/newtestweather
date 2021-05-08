
const Error = ({error}) => {
    return (
        <div>
            <h1>{error === 500 ? ( <p>Server is down</p> ) : ( <p>{error}</p> )}</h1>
        </div>
    )
}

export default Error
