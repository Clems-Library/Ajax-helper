/**
 * Simple object
 */
export default class AjaxMaker {

    url = null;
    xhr = new XMLHttpRequest();
    method = 'GET';
    onResponseOk = null;


    constructor(url, method, onResponseOk : null = null) {
        this.url = url;
        this.onResponseOk = onResponseOk;
        if (typeof method === 'string') {
            this.method = method.length in ['GET', 'POST', 'DELETE', 'PATCH'] ? method : 'GET';
        }
    }


}