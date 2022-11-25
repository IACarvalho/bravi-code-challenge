import { app } from "./app"

// TODO: get port value from a ENV variable
const port = 3333

app.listen(port, () => console.log(`Server running at pot ${port}`))