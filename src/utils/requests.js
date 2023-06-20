import { showToast } from "./helpers"
import axios from "axios"

export default function Request({
    url=null,
    method=null,
    data=null,
    params=null,
    headers=null,
    with_credentials=true
}={}) {

    return new Promise((resolve, reject) => {

        if(!headers)
            headers = {}
        
        axios({
            method: method,
            url: url,
            data: data,
            params: params,
            headers: headers,
            withCredentials: with_credentials
          }).then(
            (res) => {
                resolve(res.data)
            },
            (err) => {
                if(!err.response) {
                    
                    showToast('A Network Error Occurred. Please check your internet connection and try Again.', {
                        type: 'error'
                    })

                    reject(err)
                } else {
                    let response = err.response
                    if(response.status == 400) {
                        showToast('Please fix the errors and try again', {
                            type: 'error'
                        })
                    }
                    reject(err)
                }
            }
        )
    })
}
