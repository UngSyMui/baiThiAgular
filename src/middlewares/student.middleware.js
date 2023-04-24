
exports.can_view = ((req,res,next)=>{
    const auth = req.session.auth;
    // const permissions = auth.permisssions?auth.permissions:[];
    // if(permissions.includes(permission)){
    //     next();
    // }
    if(auth) return next();
    res.status(404).send("404 Not found");
})
exports.can_action = ("/create",(req,res,next)=>{
    const auth = req.session.auth;
    const permissions = auth && auth.permissions?auth.permissions:[];
    if(permissions.includes(permissions)){
        return next();
    }
    res.status(404).send("404 Not found");
})
