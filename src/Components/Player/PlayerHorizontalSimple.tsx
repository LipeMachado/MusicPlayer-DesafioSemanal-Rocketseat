import ImageMusic from '../../Assets/ImageMusic.png'
import { Buttons } from '../Buttons'

export function PlayerHorizontalSimple() {
    return (
        <>
            <div className="bg-purple-1000 text-white-10 p-6 rounded-lg flex items-center justify-center flex-col gap-7">
                <div className="flex gap-4">
                    <div className="w-20 h-20 max-md:w-16 max-md:h-16">
                        <img src={ImageMusic} alt='Uma imagem abstrata como se fosse um líquido movendo circulamente, da cor roxa, da música Acorda Devinho, da Banda Rocketseat.' />
                    </div>
                    <div className="flex justify-center items-start flex-col">
                        <span className="font-roboto font-bold text-2xl">Acorda Devinho</span>
                        <span className="font-roboto text-lg">Banda Rocketseat</span>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <Buttons />
                </div>
            </div>
        </>
    )
}