const fs = require('fs');



const crearArchivo = async(base = 5, listar, hasta) => {

    try{
        
        let nombreArchivo = `Tabla-${base}.txt`;
        let salida = '';
    
        for(let i=1 ; i<=hasta; i++){
    
            salida += `${base} x ${i} = ${base * i}\n`;
    
        }
    
        if(listar){
            console.log('=================================================');
            console.log(`Tabla del ${base}`);
            console.log('=================================================');
            console.log(salida);
        }
        
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida );


        return nombreArchivo;

    }catch(err){
        throw err;
    }

}

module.exports = {
    crearArchivo
}