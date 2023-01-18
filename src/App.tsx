import { PlayerUpright } from './Components/Player/PlayerUpright'
import { PlayerHorizontal } from './Components/Player/PlayerHorizontal'
import { PlayerHorizontalSimple } from './Components/Player/PlayerHorizontalSimple'

export function App() {

  return (
    <>
      <div className="md:flex justify-center items-center h-screen gap-10">
        <div className="flex justify-center items-center my-5">
          <PlayerUpright />
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <PlayerHorizontal />
          <PlayerHorizontalSimple />
        </div>
      </div>
    </>
  )
}