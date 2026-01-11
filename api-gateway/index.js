import express from "express"
import proxy from "express-http-proxy";

const app = express();


app.use('/api/user',proxy("http://localhost:3001", {
    parseReqBody: false,
    proxyReqPathResolver: (req) => {
      return req.originalUrl;
    },
  }));

app.use('/api/cart',proxy("http://localhost:3002", {
  parseReqBody: false,
  proxyReqPathResolver: (req) => {
    return req.originalUrl;
  }
}))

app.use('/api/product',proxy("http://localhost:3003", {
    parseReqBody: false,
    proxyReqPathResolver: (req) => {
      return req.originalUrl;
    },
  }));

app.listen(3000, () => {
  console.log("API Gateway is running at http://localhost:3000");
});