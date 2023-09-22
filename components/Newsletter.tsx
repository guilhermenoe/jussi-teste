const Newsletter = () => {
    return ( 
        <div className="h-[430px] bg-black flex items-center justify-center">
            <div className="flex flex-col bg-transparent after:content-['-'] after:border-b-2 after:border-primary after:w-[85%] after:self-center">
                <h2 className="text-3xl font-bold text-white uppercase mb-6 text-center">receba novidades da nossa área <br /> de produtos digitais.</h2>
                <div className="flex px-11 ">
                    <input type="text" placeholder="Insira seu e-mail" className="caret-primary w-full h-7 bg-transparent border-transparent text-white hover:border-transparent placeholder:border-transparent placeholder-transparent focus:border-transparent placeholder:text-white font-medium text-base focus:outline-none focus:ring-transparent focus:ring-0"/>
                    <button className="w-32 h-7 bg-transparent border-0 text-primary hover:text-green-600 font-medium text-base ">Cadastrar</button>
                </div>
            </div>
        </div>
     );
}
 
export default Newsletter;