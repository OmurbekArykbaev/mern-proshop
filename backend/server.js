import path from "path"
import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import { notFound, errorHandler } from "./middleWare/errorMiddleWare.js"
import color from "colors"
import morgan from "morgan"

// Routes
import productRoutes from "./routes/productRoutes.js"
import authUser from "./routes/userRoutes.js"
import orderRoutes from "./routes/orderRoutes.js"
import uploadsRoutes from "./routes/uploadsRoutes.js"

dotenv.config()

connectDB() //connect MongoDB

const app = express()

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"))
}

app.use(express.json())

app.use((req, res, next) => {
  // console.log(req.originalUrl)
  next()
})

app.use("/api/products", productRoutes)
app.use("/api/users", authUser)
app.use("/api/orders", orderRoutes)
app.use("/api/uploads", uploadsRoutes)

const __dirname = path.resolve()
app.use("/uploads", express.static(path.join(__dirname, "/uploads")))

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")))

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  )
} else {
  app.get("/", (req, res) => {
    res.send("API is running...")
  })
}

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
)
