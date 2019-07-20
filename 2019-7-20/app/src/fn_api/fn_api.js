export async function get(url){
    return await fetch('/api'+url).then(e=>e.json())
}

//rank
export async function rankFn(url){
    return await get(url).then(d=>d.rank.list);
}