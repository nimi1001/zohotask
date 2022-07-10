

export async function searchFunc(term) {

    const apikey = "AIzaSyDCfDy197PjsbQM1N17YLb5om98CljuV54";
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
