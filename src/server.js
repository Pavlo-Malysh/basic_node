import 'dotenv/config'
import app from "./app.js";
import { initDBConnection } from "./db.js";

const PORT = 8083;

async function bootstrap() {
    try {
        await initDBConnection();

        app.listen(PORT, (error) => {
            if (error) {
                throw (error);
            }
            console.log(`Server start on port ${PORT}`);
        });



    } catch (error) {
        console.error(error);
    }
};



bootstrap().catch(error => console.error(error));




// aek34HfE214UElMP

// student116