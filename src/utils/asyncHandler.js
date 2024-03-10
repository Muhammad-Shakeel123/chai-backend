// *********This is approch or mathode 2 that contain promise 
const asyncHandler=(requestHnadler)=>{
    (req, res, next)=>{
        Promise.resolve(requestHnadler(req, res, next)).catch((err)=> next(err))
    }
}


export {asyncHandler}

// Just for to learn about callback and heigher order function
// const asyncHandler=()=>{}
// const asyncHandler=(func)=>()=>{}
// const asyncHandler=(func)=> async()=>{}
// ****This approch or method 1 that contain try and catch 
/*const asyncHandler =(fn)=> async (req, res, next) =>{
    try{
        await fn(req, res, next)
    }catch{
        res.status(err.code || 500).json({
            success:false,
            message:err.message
        })
    }
} */