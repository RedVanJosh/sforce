import { Field } from "../Field.ts";

interface Product2ChangeEvent {
    Name: string;
    Description: string;
    Fields: Product2ChangeEventField;
}

class Product2ChangeEvent {
    constructor() {
        this.Name = "Product2ChangeEvent";
        this.Description = "Represents a change to a Product2 record.";
        this.Fields = {
            Description: {
                Name: "Description",
                Type: "string",
                Description: "A description of the change.",
                Example: "The product's price was changed from $10.00 to $15.00."
            }
        }
    }
}

interface Product2ChangeEventField {
    Description: Description;
}

interface Description extends Field {
    Example: string;
}

export { Product2ChangeEvent };