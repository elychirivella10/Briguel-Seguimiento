const prueba =[
    {
        num_request:"2022000002",
        name:"STREAT MARKET",
        categorie:"104:Marca Detenida"
    },
    {
        num_request:"2022000006",
        name:"JOYAS VILLA DE ORO",
        categorie:"104:Marca Detenida"
    },
    {
        num_request:"2022000025",
        name:"CRAX",
        categorie:"104:Marca Detenida"
    },
    {
        num_request:"2022000059",
        name:"SALTA",
        categorie:"104:Marca Detenida"
    },
    {
        num_request:"2022000045",
        name:"PACKARD BELL",
        categorie:"104:Marca Detenida"
    },
]

export const searchRequest=(request)=>{
    return prueba.filter(p=>p.num_request===request)[0]
}