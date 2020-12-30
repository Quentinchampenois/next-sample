import { rest } from 'msw'
import { Factory} from "../lib/factory";

const factory = new Factory()
export const handlers = [
    rest.get('/api/users/2', (req, res, ctx) => {
        return res(ctx.json({
                "user": factory.userData(2)
            })
        )
    }),
    rest.get('/api/ideas', (req, res, ctx) => {
        return res(ctx.json({
                "ideas": factory.listIdeas()
            })
        )
    }),
]