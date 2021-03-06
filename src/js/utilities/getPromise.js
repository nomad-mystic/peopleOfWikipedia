/**
 * Created by Nomad_Mystic on 8/19/2016.
 */


let getPromise = (url) => {
    return new Promise((resolve, reject) => {

        let req = new XMLHttpRequest();

        req.onload = () => {
            // this will send if it has any status code
            if (req.status == 200) {
                resolve(req.response);
            } else {
                reject(Error(req.statusText));
            }
        };

        req.onerror = (err) => {
            console.log(err);
            reject(Error(req.statusText));
        };
        req.open('GET', url, true);
        req.send();
    });
};


export default getPromise;