import f1 from "./Frame 1157.png"
    import f2 from "./Frame 1158.png"
    import f3 from "./refresh-right-square.png"
export default function Why(){
    
    return <div>
        <div className="text-2xl font-bold justify-center text-center pt-3">
            But Why Musaafir?
        </div>
        <div className="grid grid-cols-3 text-center">
            <div>
                <img src={f1}></img>
            </div>
            <div>
            <img src={f2}></img>
            </div>
            <div>
            <img src={f3}></img>
            </div>
        </div>
    </div>
}