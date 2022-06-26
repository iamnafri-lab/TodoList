import { AuthenticationError } from "apollo-server-express";
import jwt from "jsonwebtoken";

export let validateUser = (token: string) => {
    if (token) {
        try {
            token = token.replace("Bearer ","");
            const decoded = jwt.verify(token, 'MySecretKEY');
            return decoded;
        } catch (ex) {
            throw new AuthenticationError("Invalid Token Provided.");
        }
    }
    throw new AuthenticationError("No Token Provided.");
}