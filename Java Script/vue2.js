const App = {
    data() {
        return {
            errorMessage1: false,
            errorMessage2: false,
            errorMessage3: false,

            name: '',
            phone: '',
            email: '',
            feed:'',
        }
    },
    methods: {

        validName(){
            if(this.name.match(/^[A-Z][a-z]+$|^[А-Я][а-я]+$/) != this.name && this.name.length != 0){
                this.errorMessage1 = true;
                this.errorMessage2 = false;
                this.errorMessage3 = false;
            }
            else{
                this.errorMessage1 = false;
            }
        },

        validPhone(){
            if (this.phone.match(/^89[0-9]{9}$|^\+79[0-9]{9}$/) != this.phone && this.phone.length != 0){
                this.errorMessage2 = true;
                this.errorMessage1 = false;
                this.errorMessage3 = false;
            }
            else{
                this.errorMessage2 = false;
            }
        },

        validEmail(){
            if(this.email.match(/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i) != this.email && this.email.length != 0){
                this.errorMessage3 = true;
                this.errorMessage1 = false;
                this.errorMessage2 = false;
            }
            else{
                this.errorMessage3 = false;
            }
        },
        
    },
    computed:{

    }
}
const app = Vue.createApp(App);
app.mount('#app');



