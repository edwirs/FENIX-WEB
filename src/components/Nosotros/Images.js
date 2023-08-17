import sacos from 'assets/img/Nosotros/sacos.jpeg'
import servicios_randols from 'assets/img/Nosotros/servicios_randols.jpg'

function Images(){
    return(
        <div className="w-full">
            <div className="grid grid-cols-2 gap-8">

            <img src={sacos}
             className="w-full h-96 object-cover"/>
            <img src={servicios_randols}
             className="w-full h-96 object-cover"/>
            </div>
        </div>
    )
}
export default Images