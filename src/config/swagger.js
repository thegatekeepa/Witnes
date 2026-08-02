import swaggerJsdoc from "swagger-jsdoc";

const swaggerOptions = {
  definition: {
    openapi: "3.0.3",
    info: {
      title: "Witnes API",
      version: "1.0",
      description: 
          "Developer-focused Session Tracking API. Witnes enables developer applications to create, monitor, revoke, and retrieve user sessions and session activities.", 
      contact: {
        name: "Gatekeepa", 
        url: "https://github.com/thegatekeepa", 
        url: "https://www.linkedin.com/in/david-caleb-a78b01356/"
      }
    },

    servers: [
      {
        url: "https://witnes.onrender.com/api-docs", 
        description: "Production Server"
      }
    ],

    components: {
            securitySchemes: {
                ApiKeyAuth: {
                    type: "apiKey",
                    in: "header",
                    name: "x-api-key"
                }
            }
        }
  },

  apis: ["./src/docs/*.swagger.js"]
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

export default swaggerSpec;
