import style from "~/styles/title.module.css"

export function Title({content} :{content: string}) {
    return (
        <div >
            <h1 className= {style.h1}>{content}</h1> 
        </div>
    )
}