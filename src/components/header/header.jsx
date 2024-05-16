import logo from '../../assets/avicenna-logo.svg'
import callback from '../../assets/callback.svg'


function HeaderComponent() {
    return (
        <header className="w-full text-[16px]">
            <div className="flex flex-row justify-around items-center text-white pt-12">
                <div className='flex items-center '>
                    <img className='mr-[5px]' src={logo} alt="" />
                    <p>Avicenna AI</p>
                    <div className="h-[58.25px] w-[1.10px] mx-[25px] bg-[#D8D8D8]"></div>
                    <p className="w-[77px] text-[12px] font-thin">Забота на расстоянии</p>
                </div>
                <div className='flex items-center gap-[20px] font-medium'>
                    <p className="cursor-pointer">О нас</p>
                    <p className="cursor-pointer">Болезни</p>
                    <p className="cursor-pointer">Специалисты</p>
                    <p className="cursor-pointer">Форум</p>
                </div>
                <div>
                    <img src={callback} alt="" />
                </div>
            </div>
        </header>
    );
}
export default HeaderComponent;