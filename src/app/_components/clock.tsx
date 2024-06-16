import style from "~/styles/clock.module.css"

export function Clock({time} :{time: string}) {
    return (
        <div>
            <h2 className={style.h2}>{time}</h2>
            <button className={style.button}><p>INICIAR</p></button>
        </div>
    )
}