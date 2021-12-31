export default function({$axios}){
    $axios.defaults.timeout = 15000;
    $axios.onResponse(response => {
        return response.data;
    })
}