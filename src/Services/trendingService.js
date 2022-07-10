

export async function trendingFunc() {

    const apikey = process.env.REACT_APP_API_KEY
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