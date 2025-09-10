import img_1 from 'assets/img/img_1.png';
import img_2 from 'assets/img/img_2.png';

function Images(){
    return(
        <div className="w-full">
            <div className="grid grid-cols-2 gap-8">

            <img src={img_1}
             className="w-full h-96 object-cover"/>
            <img src={img_2}
             className="w-full h-96 object-cover"/>
            </div>
        </div>
    )
}
export default Images