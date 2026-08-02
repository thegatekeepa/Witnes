import swaggerJsdoc from "swagger-jsdoc";

const swaggerOptions = {
  definition: {
    openapi: "3.0.3",
    info: {
      title: "Witnes API",
      version: "1.0",
      description: "Witnes is a developer-focused Session Tracking API that enables developer applications to create, monitor, revoke, and retrieve user sessions and session activities.",  
      contact: {
        name: "Gatekeepa",
        url: "https://www.linkedin.com/in/david-caleb-a78b01356/"
      },
       license: {
        name: "MIT License",
        url: "https://opensource.org/licenses/MIT"
    }, 
    externalDocs: {
    description: "View the GitHub Repository",
    url: "https://github.com/thegatekeepa/Witnes"
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
