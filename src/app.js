import express from "express"

import cors from "cors"

import cookieParser from "cookie-parser"

const app=express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))
// Before cookie we do some setings

// 1.So, app.use(express.json({limit: "16kb"})) sets up middleware 
// in your Express application to parse incoming JSON requests and limit the size 
// of the JSON payload to 16 kilobytes.
app.use(express.json({limit: "16kb"}))

// 2.This line of code sets up a middleware in an Express.js application to handle incoming data 
// that's encoded in the URL format, typically coming from HTML form submissions.
app.use(express.urlencoded({extended:true,limit: "16kb"}))

// 3.This line of code tells your Express.js 
// application to serve static files from a directory named "public"
app.use(express.static("public"))

// now for cookie 
app.use(cookieParser())
export { app }