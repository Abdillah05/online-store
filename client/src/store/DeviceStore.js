import {makeAutoObservable} from 'mobx';

export default class DeviceStore{
constructor() {
    this.types = [
        {id:1, name:'refregerator'},
        {id:2, name:'smartphone'}
    ]

    this.brands = [
        {id:1, name:'Samsung'},
        {id:2, name:'Apple'}
    ]

    this.devices = [
{id:1, name:'iphone 12 pro', price: 25000, rating:5, img:'https://www.ixbt.com/img/x780x600/r30/00/02/34/83/IMG8464.jpg'},
{id:2, name:'iphone 12 pro', price: 25000, rating:5, img:'https://www.ixbt.com/img/x780x600/r30/00/02/34/83/IMG8464.jpg'},
{id:3, name:'iphone 12 pro', price: 25000, rating:5, img:'https://www.ixbt.com/img/x780x600/r30/00/02/34/83/IMG8464.jpg'},
{id:4, name:'iphone 12 pro', price: 25000, rating:5, img:'https://www.ixbt.com/img/x780x600/r30/00/02/34/83/IMG8464.jpg'}
    ]


    makeAutoObservable(this)
}
setTypes(types){
    this._types = types
};
setBrands(brands){
    this._brands = brands
};
setDevices(devices){
    this._devices = devices
};

// get types() {
//     return this._types
// }                     
// get brands() {
//     return this._brands
// }
// get devices() {
//     return this._devices
// }

}