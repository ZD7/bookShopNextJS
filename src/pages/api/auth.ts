
import {validateAuth} from "../../helpers/validate_auth"

export default async function handler(req, res) {
    
    // if (req.status !== 'POST') {
    //     res.status(405).send({ error: true, message: 'Only POST' })
    // }

    const { email, password } = req.body;

    
    const validatedInfo = validateAuth(email, password);

    if (validatedInfo.error) {
        res.status(400).send({ error: true, message: validatedInfo.message, type: validatedInfo.type });
    } else {
        res.status(200).send({ success: true, token: 'testToken' });
    }
}