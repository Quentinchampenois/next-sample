import { rest } from 'msw'
import { Factory} from "../lib/factory";

const factory = new Factory()
export const handlers = [
    rest.get('api/users/:userId', (req, res, ctx) => {
        const { userId } = req.params

        return res(
        ctx.json(factory.userData(userId))
        )
    }),
]