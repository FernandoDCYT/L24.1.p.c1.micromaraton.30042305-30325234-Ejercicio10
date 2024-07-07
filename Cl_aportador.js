export default class Cl_aportador{
    constructor (ced, bill5, bill10, bill20){
        this.ced=ced;
        this.bill5=bill5;
        this.bill10=bill10;
        this.bill20=bill20;
    }
    set ced(c){
        this._ced=c;
    }
    get ced(){
        return this._ced
    }
    set bill5(b5){
        this._bill5=b5;
    }
    get bill5(){
        return this._bill5
    }
    set bill10(b10){
        this._bill10=b10;
    }
    get bill10(){
        return this._bill10;
    }
    set bill20(b20){
        this._bill20=b20;
    }
    get bill20(){
        return this._bill20
    }
    calcAp(){
        return this._bill5*5 + this._bill10*10 + this.bill20*20;
    }
    
}