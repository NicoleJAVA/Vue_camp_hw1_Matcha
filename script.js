const USER_API = 'https://randomuser.me/api/?results=15'

Vue.createApp({
    data () {
        return {
            users: [],
            resolutions:['lg', 'md', 'sm'],
            currResolution: 0,
        }
    },
    methods: {
        fetchData(api) {
            fetch(api, {})
            .then((response) => {
                return(response.json());
            })
            .then((jsonData) => {
                this.users = jsonData.results;
                console.log('The first user:', this.users[0]);
            })
            .catch((err) => {
                console.log('Failed to fetch ' + api, err.message);
            });
        },

        changeResolution() {
            this.currResolution += 1;
            this.currResolution %= this.resolutions.length;
        }
    },
    mounted () {
        this.fetchData(USER_API);
    }
}).mount('#app');
