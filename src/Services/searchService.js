

export async function searchFunc(term) {

    const apikey = process.env.REACT_APP_API_KEY
    const clientkey = "my_test_app";
    const lmt = 200;

    try{
       let res = await fetch("https://tenor.googleapis.com/v2/search?q=" + term + "&key=" + apikey +"&client_key=" + clientkey +  "&limit=" + lmt)

        let response = await res.json()

        if(response.hasOwnProperty('next')){
            return response
        }else{
            return response
        }
    }
    catch(err){
       return false
    }

}
