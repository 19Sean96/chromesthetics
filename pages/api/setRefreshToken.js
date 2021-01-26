import { serialize } from "cookie";

export default async (req,res) => {
    await res.setHeader(
        "Set-Cookie",
        serialize("b", req.body.cookie, { 
            path: "/",
            maxAge: 60 * 60 * 24 * 7
        })
    );
    res.json({message: "done"})
}