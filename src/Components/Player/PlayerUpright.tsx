import ImageMusic from '../../Assets/ImageMusic.png'
import { Buttons } from '../Buttons'

export function PlayerUpright() {
    return (
        <>
            <div className="bg-purple-1000 text-white-10 w-72 p-7 rounded-lg flex items-center justify-center flex-col gap-7">
                <div className="w-48 h-48">
                    <img src={ImageMusic} alt='Uma imagem abstrata como se fosse um líquido movendo circulamente, da cor roxa, da música Acorda Devinho, da Banda Rocketseat.' />
                </div>
                <div className="flex justify-center items-start flex-col">
                    <span className="font-roboto font-bold text-2xl">Acorda Devinho</span>
                    <span className="font-roboto text-lg">Banda Rocketseat</span>
                </div>
                <div className="flex justify-center items-center">
                    <Buttons />
                </div>
                <div className='flex items-center'>
                    <span>Barra</span>
                </div>
            </div>
        </>
    )
}