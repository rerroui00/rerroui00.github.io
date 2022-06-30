const App = {
    data() {
        return {
            openAuto: false, // открытие модального окна для авторизациии
            
            openReg: false, // открытие модального окна для регистрации

            openAdd: false, // открытие модального окна для добавления

            hiddenAdd: true,  // видимость кнопки добавления

            errorMessage1: false,
            errorMessage2: false,
            errorMessage3: false,

            errorMessage4: false,
            errorMessage5: false,
            errorMessage6: false,

            errorMessage7: false,
            errorMessage8: false,

            name: '', // модель для хранения имени
            login: '', // модель для хранения логина
            password: '',  // модель для хранения пароля

            phone: '', // модель для хранения телефона
            email: '', // модель для хранения email

            name: '',  // модель для хранения имени
            surname: '',    // модель для хранения фамилии
            radioEstimation: '',  // модель для хранения поля
            feedback: '', // модель для хранения отзыва

            moreback: [
                {id: 1, name: 'Ирина', surname: 'Винокурова', estimation: '5/5', feedback:'Очень хороший детский сад. Ухоженная и оборудованная для игр территория. Заботливая заведующая и очень хорошие воспитатели. Во всяком случае были, когда мой ребенок в него ходил.'},
                {id: 2, name: 'Татьяна', surname: 'Сизова', estimation: '4/5', feedback:'Нормальный, обычный садик. Воспитатели большинство работают много лет. Есть логопедическая группа с 6 лет. Ухоженная, чистая территория, зимой активно украшают гирляндами.'},
                {id: 3, name: 'Наталья', surname: 'Шулькина', estimation: '5/5', feedback:'Водили сюда младшую дочь. Очень благодарны педагогам и руководству за достойную подготовку к первому классу!'},
                {id: 4, name: 'Анна', surname: 'Важдаева', estimation: '5/5', feedback:'В детском саду есть специализированная логопедическая группа, в которой работают прекрасные педагоги! Мой ребёнок провёл в этой группе 2 года и это замечательное время его жизни и формирования, как личности!!!'},
                {id: 5, name: 'Ирина', surname: 'Шумилова', estimation: '5/5', feedback:'Отличный дс, очень хорошая подготовка к школе, не нужны никакие доп.курсы, ребенок на выходе и читает и считает.'},
            ],
        }
    },
    methods: {

        closeAdd(){
            this.openAdd = false;
        },

        closeOpenReg(){
            this.openReg = false;
        },

        closeOpenAuto(){
            this.openAuto = false;
        },

        // открытие окна для авторизации
        openModalAuto() {
            this.name = '';
            this.login = '';
            this.password = '';
            this.openAuto = true;
        },

        // открытие окна для регистрации
        openModalReg() {
            this.name = '';
            this.login = '';
            this.password = '';
            this.openReg = true;
        },

        // открытие окна для добавления
        openModalAdd() {
            this.openAdd = true;
        },

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

        validPass(){
            if(this.password.match(/^(?=.*[^a-zA-Z]).{8,40}$/) != this.password && this.password.length != 0){
                this.errorMessage3 = true;
                this.errorMessage2 = false;
                this.errorMessage1 = false;
            }
            else{
                this.errorMessage3 = false;
            }
        },

        validLog(){
            if(this.login.match(/^[a-zA-Z].{3,20}$/) != this.login && this.login.length != 0){
                this.errorMessage2 = true;
                this.errorMessage3 = false;
                this.errorMessage1 = false;
            }
            else{
                this.errorMessage2 = false;
            }
        },

        validName2(){
            if(this.name.match(/^[A-Z][a-z]+$|^[А-Я][а-я]+$/) != this.name && this.name.length != 0){
                this.errorMessage4 = true;
                this.errorMessage5 = false;
                this.errorMessage6 = false;
            }
            else{
                this.errorMessage4 = false;
            }
        },

        validPass2(){
            if(this.password.match(/^(?=.*[^a-zA-Z]).{8,40}$/) != this.password && this.password.length != 0){
                this.errorMessage6 = true;
                this.errorMessage5 = false;
                this.errorMessage4 = false;
            }
            else{
                this.errorMessage6 = false;
            }
        },

        validLog2(){
            if(this.login.match(/^[a-zA-Z].{3,20}$/) != this.login && this.login.length != 0){
                this.errorMessage5 = true;
                this.errorMessage6 = false;
                this.errorMessage4 = false;
            }
            else{
                this.errorMessage5 = false;
            }
        },

        validName3(){
            if(this.name.match(/^[A-Z][a-z]+$|^[А-Я][а-я]+$/) != this.name && this.name.length != 0){
                this.errorMessage7 = true;
                this.errorMessage8 = false;
            }
            else{
                this.errorMessage7 = false;
            }
        },

        validSur(){
            if(this.surname.match(/^[A-Z][a-z]+$|^[А-Я][а-я]+$/) != this.surname && this.surname.length != 0){
                this.errorMessage8 = true;
                this.errorMessage7 = false;
            }
            else{
                this.errorMessage8 = false;
            }
        },

        // регистрация
        reg() {
            let key = Date.now();
            console.log(key);
            const user = {
                name: this.name,
                login: this.login,
                password: this.password,
            }
            let userAuto;
            for(let i = 0; i<localStorage.length;i++){
                const key = localStorage.key(i);  // получения ключа
                const value = localStorage[key];  // получение значения по ключу
                let user = JSON.parse(value); // перевод значения обратно в объект
                if (user.login === this.login && user.password === this.password && user.name === this.name) {
                    userAuto = user;
                    alert("Этот пользователь уже зарегистрирован!")
                    break;
                }
            }
            if(!userAuto){
                localStorage.setItem(key.toString(), JSON.stringify(user)); // запись в локальное хранилище
                this.openReg = false;
            }
            
        },

        // авторизация
        auto() {
            let userAuto;  // переменная для хранения найденного пользователя
            // цикл по элементам локального хранилища
            for (let i = 0; i<localStorage.length; i++) {
                const key = localStorage.key(i);  // получения ключа
                const value = localStorage[key];  // получение значения по ключу
                let user = JSON.parse(value);  // перевод значения обратно в объект
                if (user.login === this.login && user.password === this.password && user.name === this.name) {
                    userAuto = user;
                    this.hiddenAdd = false;
                    this.buttonDelete = true;
                    break;
                }
            }
            if (!userAuto) {
                alert('Пользователь не найден');
            }
            this.openAuto = false;
            this.name = '';
        },


        // добавление отзыва в список
        addBack() {
            let back = {
                id: Date.now(),
                name: this.name,
                surname: this.surname,
                estimation: this.radioEstimation,
                feedback: this.feedback,
            }
            this.moreback.push(back);

            this.openAdd = false;

            this.name = '';
            this.surname = '';
            this.radioEstimation = '';
            this.feedback = '';
        }
        
    },
}
const app = Vue.createApp(App);
app.mount('#app');



