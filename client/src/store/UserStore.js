import {makeAutoObservable} from 'mobx';

export default class UserStore{
constructor() {
    this._isAuth = true //переменные с нижним подчеркиванием нельзя изменят(соглашение)
    this._user = {}
    makeAutoObservable(this)
}
setIsAuth(bool){
    this._isAuth = bool
};
setUser(user){
    this._user = user
}

get isAuth() {
    return this._isAuth
}                     // нужен чтобы получить переменные из нашего состояния, используется если переменная внутри была изменена

get user() {
    return this._user
}

}