import {useState } from "react";
export default function FormComponens(props){
const [obj, setObj] = useState({
    nev: "",
    szulEv: 2000,
})

    function valtozasKezeles(event){
        console.log(event.target.value)
        let sv={...obj}
        sv[event.target.id] = event.target.value
        setObj({...sv})
    }
    function adatKuld(event){
        event.preventDefault()
        console.log(obj)
        props.adatKuld(obj)
    }
    return(
        <form onSubmit={adatKuld}>
            <div>
                <label htmlFor="nev">Név</label>
                <input type="text" id="nev" name="nev" value={obj.nev} placeholder="VezetékNév Keresztnév" onChange={valtozasKezeles}></input>
                </div>
            <div>
            <label htmlFor="szulev">Születési év</label>
            <input type="number" id="szulEv" name="szulEv" value={obj.szulEv} min="1900" max="2024" onChange={valtozasKezeles}></input>
            </div>
        </form>
    )
}