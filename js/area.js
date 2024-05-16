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
    const area =  0.5*bab*hah;
    getthearea(area,'tri');

}

function rectangle(){
    const geta = getvale('a');
    const getb =  getvale('b');
    const areaa =  geta*getb;
    getthearea(areaa , 'rec');
}