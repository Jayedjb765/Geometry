function getvale(indexid){
    const getidvalue =  document.getElementById(indexid);
    const getidstring =  getidvalue.value;
    const gethevalue  =  parseFloat(getidstring);
    return gethevalue;


}
function getinnervalueof(indexi){
    const getidtext =  document.getElementById(indexi);
    const getidstring  =  getidtext.innerText;
    const getidvlue  =  parseFloat(getidstring);
    return getidvlue;
}
function getthearea(valuee , idnmbr){
    const getid =  document.getElementById(idnmbr);
    getid.innerText= valuee;

}

function triangleValue(){
    const bab = getvale('b');
    const hah = getvale('h');
    if(isNaN(bab)||isNaN(hah)){
        alert('please instert number');
        return;
    }
    const area =  0.5*bab*hah;
    getthearea(area,'tri');
    addtocalculationentry('Triangle' ,area);

}

function rectangle(){
    const geta = getvale('a');
    const getb =  getvale('b');
    if(isNaN(geta)||isNaN(getb)){
        alert('please instert number');
        return;
    }
    const areaa =  geta*getb;
    getthearea(areaa , 'rec');
    addtocalculationentry('rectangle' ,areaa);
}
function rombosh(){
    const getr = getvale('r');
    const getm  =  getvale('m');
    if(isNaN(getr)||isNaN(getm)){
        alert('please instert number');
        return;
    }
    const aarea =  getr*getm;
    getthearea(aarea,'rmc');
    addtocalculationentry('Rombodh' ,aarea);
}
function pentagon(){
    const getx =  getvale('x');
    if(isNaN(getx)){
        alert('please instert number');
        return;
    }
    const areea  =  .25 * Math.sqrt(5 *(5+2 * Math.sqrt(5) )) * (getx* getx);
    getthearea(areea ,'penta' );
    addtocalculationentry('Pentagon' ,areea);


}
function parallelogram(){
    const gete =  getvale('e');
    const getf =  getvale('f');
    if(isNaN(gete)||isNaN(getf)){
        alert('please instert number');
        return;
    }
    const areeaa =  gete * getf;
    getthearea(areeaa ,'pentaa' );
    addtocalculationentry('parallelogram' ,areeaa);

}
  
function addtocalculationentry(areatype ,area){
    console.log(areatype + '' +area);
    const calculation =  document.getElementById('calculationentry');
    const p  =  document.createElement('p');
    p.innerHTML = `  ${areatype} ${area} cm<sup>2</sup> <button class = "btn btn-success">Convert</button>`; 
    calculation.appendChild(p);

     
}