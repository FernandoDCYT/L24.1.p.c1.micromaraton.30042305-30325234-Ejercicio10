export default class Cl_administracion{
    constructor(){
        this.acumB=0;
        this.acumB5=0;
        this.acumB10=0;
        this.acumB20=0;
        this.acumMontHoy=0.0;
        this.bill5Ant=5;
        this.bill10Ant=10;
        this.bill20Ant=5;
    }
    procesarAportador(a){
        this.acumMontHoy+= a.calcAp();
        this.acumB+= a.bill5 + a.bill10 + a.bill20;
        this.acumB5+= a.bill5;
        this.acumB10+= a.bill10;
        this.acumB20+= a.bill20;
    }
    calcBillTotAnt(){
        return this.bill10Ant + this.bill5Ant + this.bill20Ant
    }
    calcDiaAnt(){
        return this.bill5Ant*5 + this.bill10Ant*10 + this.bill20Ant*20;
    }
    calcTot(){
        return this.acumMontHoy + this.calcDiaAnt();
    }
    calcPorcB20(){
        return (this.acumB20 + this.bill20Ant)/(this.calcBillTotAnt() + this.acumB) * 100;
    }
}