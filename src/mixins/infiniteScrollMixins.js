export default {
    data() {
        return {
            list: [],
            loading: false,
            num: 1,
            url: '',
            size:10,//每页加载的数据条数
            num:1,//从第几天开始加载
        };
    },
    created(){
        let vm =this;
        vm.loadMore();
    },
    methods: {
        loadMore() {
            let vm = this;
            vm.$get(vm.url, { size: vm.size, num: vm.num++ }).then(function (data) {
                data=data||[];
                vm.list = [...vm.list, ...data];
            });
        }
    }
}