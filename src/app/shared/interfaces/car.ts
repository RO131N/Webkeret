export interface Car {
    id:string,
    rendszam:string,
    tipus:string,
    ok:"Évfordulós biztosítás váltás"|"Új vagy használt jármű vásárlás",
    model:string,
    uzemanyag:"benzin"|"dízel"|"elektromos",
    gyartasi_ev:string,
    teljesitmeny:string,
    tomeg:string,
    tulaj:string
}