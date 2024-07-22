import jwt from 'jsonwebtoken';
import  bcrypt from 'bcrypt';


export const comparePasswords = async (password, hash) => {
    const match = await bcrypt.compare(password, hash);
    return match;
}

export const hashPassword = async (password) => {
    const hash = await bcrypt.hash(password, 10);
    return hash;
}

export const createJWT = (user) => {
    const token = jwt.sign({id: user.id, 
        username: user.username}, 
        process.env.JWT_SECRET
    );
    return token; 

}

export const verifyJWT = (req, res, next) => {
    const bearer = req.headers.authorization;
    if (!bearer) {
        res.status(401).send('Unauthorized');
        return;
    } 
    
    const [, token] = bearer.split(' ');

    if (!token) {
        res.status(401).send('Unauthorized');
        return;
    }

    try {
        const user = jwt.verify(token, process.env.JWT_SECRET);
        req.user = user;
        next();

    } catch (error) {
        console.error(error);
        res.status(401).send('Unauthorized');
        return;

   
}
    
    }