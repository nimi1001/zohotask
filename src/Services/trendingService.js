

export async function trendingFunc() {

    const apikey = "AIzaSyDCfDy197PjsbQM1N17YLb5om98CljuV54";
    const clientkey = "my_test_app";
    const lmt = 50;

    try{
        let res = await fetch("https://tenor.googleapis.com/v2/trending_terms?key=" + apikey + "&client_key=" +
                 clientkey + "&limit=" + lmt)

        return await res.json()
    }
    catch(err){
        return false
    }

}