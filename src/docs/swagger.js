import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Witnes API",
      version: "1.0",
      description: "Developer-focused Session Tracking API"
    },
    servers: [
      {
        url: "https://witnes.onrender.com/api-docs"
      }
    ]
  },
  apis: ["./src/modules/**/*.js"]
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;