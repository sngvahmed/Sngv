export function get(url){
    const Http = new XMLHttpRequest();
    Http.open("GET", url);
    Http.send();

    return {
        then: (callback) => {
            Http.onreadystatechange = (e) => {
                console.log(e, Http.readyState);
                if(e.status = 200 && Http.readyState == 4)
                    callback(JSON.parse(Http.responseText));
            }
        }
    }
}

export function post(callback){
    const Http = new XMLHttpRequest();
    const url='https://jsonplaceholder.typicode.com/posts';

    Http.open("POST", url);
    Http.send();
    Http.onreadystatechange=(e)=>{
        callback(JSON.parse(Http.responseText));
    }
}