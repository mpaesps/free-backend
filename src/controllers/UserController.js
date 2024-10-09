import UserService from "../../services/UserService";

class UserController {

    static async createUser(req, res) {
        try {
            const result = await UserService.createUser(req.body);
            res.status(200).json({ message: "Usuário criado com sucesso", user: result.user });
        } catch (error) {
            res.status(500).json({ message: `Erro ao criar usuário: ${error.message}` });
        }
    }
}

export default UserController