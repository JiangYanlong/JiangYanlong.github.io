import { observable, action } from 'mobx';
import axios from 'axios';

class ModeStore {
    @observable data = getData() || '';

    @action.bound
    changeData() {
        
    }
}
export default new ModeStore();

function getData() {
    let data ;
    axios.get('https://5b5e71c98e9f160014b88cc9.mockapi.io/api/v1/lists')
    .then(function (response) {
        console.log("response.data",response.data);
        data = response.data;
    }).catch(function (error) {
        console.log("error",error);
    });
    return data;
}
