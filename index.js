const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// .env
// DB_USER=samirunshuvo
// DB_PASS=3c6iGs8C2eZjyVVh

// Corrected MongoClient options
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster1.nnrdj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1`;
const client = new MongoClient(uri, {
  useNewUrlParser: true, // Corrected typo here
  useUnifiedTopology: true, // And here
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    await client.connect();
    const projectCollections = client
      .db("portfolio_project")
      .collection("projects");

    app.get("/projects", async (req, res) => {
      try {
        const query = {};
        const cursor = projectCollections.find(query);
        const projects = await cursor.toArray();
        res.send(projects);
      } catch (error) {
        res
          .status(500)
          .send({
            message: "Failed to fetch projects collection",
            error: error.toString(),
          });
      }
    });

    // Moved the listening to the server inside the run function to ensure it starts after a successful DB connection
    app.get("/", (req, res) => {
      res.send("Hello from Shuvo Portfolio!");
    });

    app.listen(port, () => {
      console.log(`Shuvo Portfolio app listening on port ${port}`);
    });
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
  }
}

run().catch(console.dir);
