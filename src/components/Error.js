
const Error = ({error}) => {


    function handleTypeError() {


        if(error !== 500 && error === 'Request failed with status code 404'){
            return 'Localização não encontrada'
        } else if(error === 'User denied the request for Geolocation.'){
            return 'Esta funcionalidade requer acesso à localização, que está desativada no seu dispositivo.'
        } else {
            return error
        }

    
    }


    return (
        <div className="error-container">

            <h1>Erro</h1>

            {error === 500 ? ( 
                       
            <p>O servidor não respondeu corretamente, por favor tente mais tarde.</p> 
            
            ) : handleTypeError()}


        </div>
    )
}

export default Error
