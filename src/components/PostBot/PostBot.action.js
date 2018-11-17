import fetch from 'isomorphic-fetch';
export const UPLOAD_NEW_BOT = 'UPLOAD_NEW_BOT'


export const uploadBot = (newBot) => {

    return function (dispatch) {

        dispatch({ type: UPLOAD_NEW_BOT })

        return fetch('http://jsonstub.com/your/first/request', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'JsonStub-User-Key': 'cc1dbe08-c37a-451a-ae6a-8de0694374a6',
                'JsonStub-Project-Key': 'bb93401e-13ea-449a-b7ae-65117ca18dd3'
            },
            body: JSON.stringify({
                "first_name": newBot.first_name,
                "last_name": newBot.last_name,
                "id": newBot.id,
                "email": newBot.email,
                "country": newBot.country

            })
        })
        // 			.then((res) => res.json())
        // 			.then(res => dispatch({
        // 				type	: NEW_BOT_UPLOADED,
        // 				payload	: res
        // 			}))
        // 			.catch( err => dispatch({
        // 				type	: NEW_BOT_UPLOAD_ERROR,
        // 				payload	: err
        // 			}))

        // }
    }
}

// fetch('https://mywebsite.com/endpoint/', {
//     method: 'POST',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       firstParam: 'yourValue',
//       secondParam: 'yourOtherValue',
//     })
//   })

//