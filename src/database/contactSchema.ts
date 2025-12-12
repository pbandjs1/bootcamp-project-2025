import mongoose, { Schema, models } from "mongoose";

// typescript type (can also be an interface)
type Contact = {
    email: string;
};


// mongoose schema 
const contactSchema = new Schema<Contact>({
    email: { type: String, required: true }
})

// defining the collection and model
const ContactModel = models.contactData ||
    mongoose.model("contactData", contactSchema, "contactData");

export default ContactModel;