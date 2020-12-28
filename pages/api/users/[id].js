import { useRouter } from 'next/router'

const router = useRouter()

export default (req, res) => {
    res.statusCode = 200
    res.json({ name: 'John Doe' })
}
