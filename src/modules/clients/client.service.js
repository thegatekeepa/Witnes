import bcrypt from "bcrypt";

//hash apiKey before saving
clientSchema.pre(
  "save", async function () {
  if (!this.isModified("apiKeyHash")) return; // Only hash if apiKey is new/changed

  const salt = await bcrypt.genSalt(10); // Generate salt
  this.apiKey = await bcrypt.hash(this.apiKeyHash, salt); // Hash apiKey
  }
);

//compare entered apiKey with stored hash
clientSchema.methods.compareApiKey = async function (inputApiKey) {
  return bcrypt.compare(inputApiKey, this.apiKeyHash);
};
