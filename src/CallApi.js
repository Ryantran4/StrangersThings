const { REACT_APP_BASE_URL} = process.env;

export const callApi = async ({url, method, token, body}) => {
    try {
        console.log('>>>>>')
        console.log(url);
        console.log(method);
        console.log(token);
        console.log(body);
        console.log('>>>>>')
       const options = {
           method: method.toUpperCase(),
           headers: {
               'Content-Type': 'application/json',
           },
           body:JSON.stringify(body)
       };
       if (token) options.headers['Authorization'] = `Bearer ${(token)}`;

       console.log('options :', options);

       const response = await fetch(`${REACT_APP_BASE_URL}${url}`, options);
       const data = await response.json();
       if(data.error) {
           throw (data.error)
       }
       return data;
    }   catch (error) {
        console.error(error);
    }
}