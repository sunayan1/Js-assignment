async function  openFile(({
    try{
        await fs.writeFile("myFirsteFIle.txt") 
    }catch (error)
    console.log(error)
}