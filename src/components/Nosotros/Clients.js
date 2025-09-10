import colombia from 'assets/img/colombia.jpg';
import españa from 'assets/img/españa.jpg';
import estados_unidos from 'assets/img/estados_unidos.jpg';
import francia from 'assets/img/francia.jpg';
import inglaterra from 'assets/img/inglaterra.jpg';
import emiratos from 'assets/img/emiratos.jpg';

function Clients(){
    return(
        <div className="bg-white">
                    <div className="mx-auto lg:mx-12 max-w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
                        <div>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Recomendada por las personas colombianas y de todas partes del mundo.
                        </h2>
                        <p className="mt-3 max-w-3xl text-lg text-gray-500">
                            Contamos con clientes importantes dentro del pais nativo, asi como a nivel internacional,
                            ya que nuestro objetivo es poder llegar a todos los rincones del mundo.
                        </p>
                        <div className="mt-8 sm:flex">
                            <div className="mt-3 sm:mt-0 sm:ml-3">
                            <a
                                href="/contacto"
                                className="flex items-center justify-center rounded-md border border-transparent bg-indigo-100 px-5 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200"
                            >
                                Contactanos
                            </a>
                            </div>
                        </div>
                        </div>
                        <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
                        <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                            <img
                            className="max-h-12"
                            src={colombia}
                            alt="Workcation"
                            />
                        </div>
                        <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                            <img 
                            className="max-h-12" 
                            src={españa} 
                            alt="Mirage" />
                        </div>
                        <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                            <img className="max-h-12" 
                            src={estados_unidos}
                            alt="Tuple" />
                        </div>
                        <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                            <img
                            className="max-h-12"
                            src={francia}
                            alt="Laravel"
                            />
                        </div>
                        <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                            <img
                            className="max-h-12"
                            src={inglaterra}
                            alt="StaticKit"
                            />
                        </div>
                        <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                            <img
                            className="max-h-12"
                            src={emiratos}
                            alt="Statamic"
                            />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
    )
}

export default Clients