import jwt from 'jsonwebtoken'

const token = jwt.sign(
    { userID: 1, username: 2 },
    "MySecretKEY",
    { algorithm: "HS256", subject: `2`, expiresIn: "2h" }
);

console.log(token);

const decoded = jwt.verify(token, "MySecretKEY");

console.log(decoded);

