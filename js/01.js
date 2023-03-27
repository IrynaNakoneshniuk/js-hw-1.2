const bonus=0.15;
const tax =0.1;
const cost=190;
let salary=Number(prompt("Введіть суму зарплатні:"));
if(salary!==0){
    salary+=(salary*bonus);
    console.log(salary);
    const residual= salary-(salary*tax)-cost;
    alert(`Залишок зарплатні ${residual.toFixed(0)}`);
}
else{
    alert(`Скасовано користувачем`);
}

