export type typeConfigBot = {
    botName: string,
    maxCache : number,
    prefixAllowed : Array<string>
}

export const ConfigBot : typeConfigBot = {
    botName : "R-Bot",
    maxCache: 200,
    prefixAllowed : [
        "#",
        "/",
        "!"
    ]
}
