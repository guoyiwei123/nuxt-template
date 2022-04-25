export default function ({ $axios }) {
    $axios.defaults.timeout = 15000;
    $axios.onError(error => {
        console.log(error);
    })
    $axios.onResponse(response => {
        console.log(response);
        return response.data;
    })
}