// import jwt from "jsonwebtoken"

// const authMiddleware = async (req,res,next) => {
//     const {token} = req.headers;
//     if (!token) {
//         return res.json({success:false,message:"Not Authorized Login Again"})
//     }
//     try {
//         const token_decode = jwt.verify(token,process.env.JWT_SECRET);
//         req.body.userId = token_decode.id;
//         next();
//     } catch (error) {
//         console.log(error);
//         res.json({success:false,message:"Error"})
//     }
// }

// export default authMiddleware;


import jwt from "jsonwebtoken"

const authMiddleware = async (req, res, next) => {
    const { token } = req.headers;
    if (!token) {
        return res.json({ success:false, message:"Not Authorized Login Again" });
    }
    try {
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);

        // agar req.body undefined hai to empty object bana do
        if (!req.body) req.body = {};

        req.body.userId = token_decode.id;

        console.log("✅ userId set in body:", req.body.userId);

        next();
    } catch (error) {
        console.log(error);
        res.json({ success:false, message:"Error" });
    }
}

export default authMiddleware;


