let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald"
};
info.recorrente = 'Sim';

for(let i in info){
console.log(info[i])
};
info.personagem= 'Tio Patinhas';
info.origem= 'Christmas on Bear Mountain, Dell’s Four Color Comics #178';
info.nota= 'O último MacPatinhas';
info.recorrente= 'Sim';

for(let i in info){
    console.log(info[i])
};