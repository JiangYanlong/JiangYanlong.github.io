import { observable, action } from 'mobx';
import axios from 'axios';

class ModeStore {

    @observable data = [];
    @observable bottom = 'bottomRight';
    @observable loading = false;
    @observable columns = [];

    @action.bound
    initDataRes(res) {
        this.data = res.data;
        this.loading = false;
    }

    @action
    init_column = ()=> {
        this.columns = [
            {
                title: 'ID',
                dataIndex: 'id',
                key: 'id',
            },
            {
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: '年龄',
                dataIndex: 'age',
                key: 'age',
            },
            {
                title: '性别',
                dataIndex: 'sex',
                key: 'sex',
            },
        ];
    }

    @action
    init = ()=> {
        this.loading = true;
        axios.get('https://5b5e71c98e9f160014b88cc9.mockapi.io/api/v1/lists')
        .then(this.initDataRes)
    }
}
export default new ModeStore();
