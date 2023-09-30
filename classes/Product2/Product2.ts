import { Field } from "../Field.ts";
import { Product2ChangeEvent } from "./Product2ChangeEvent.ts";

interface Product2 {
    Name: string;
    Description : string;
    Fields: Product2Fields;
    AssociatedObjects: AssociatedObjects;
}

class Product2 {
    constructor () {
        this.Name = "Product2";
        this.Description = `Represents a product that your company sells. This object has several fields that are used only for quantity and revenue schedules (for example, annuities). Schedules are available only for orgs that have enabled the products and schedules features. If these features aren’t enabled, the schedule fields don’t appear , and you can’t query, create, or update the fields.`
        this.Fields = {
            BillingPolicyId: {
                Name: "BillingPolicyId",
                Description: "The ID of the billing policy associated with this product.",
                Type: "reference",
                Required: false,
                RelationShipName: "BillingPolicy",
                RelationshipType: "Lookup",
                RefersTo: "BillingPolicy"
            },
            CanUseQuantitySchedule: {
                Name: "CanUseQuantitySchedule",
                Type: "boolean",
                Description: "Indicates whether the product can have a quantity schedule (true) or not (false). Label is Quantity Scheduling Enabled.",
                Example: ""
            },
            CanUseRevenueSchedule: {
                Name: "CanUseRevenueSchedule",
                Type: "boolean",
                Description: "Indicates whether the product can have a revenue schedule (true) or not (false). Label is Revenue Scheduling Enabled.",
                Example: ""
            },
            ConnectionReceivedId: {
                Name: "ConnectionReceivedId",
                Type: "reference",
                Description: "ID of the PartnerNetworkConnection that shared this record with your organization. This field is available if you enabled Salesforce to Salesforce.",
                Example: ""
            },
            ConnectionSentId: {
                Name: "ConnectionSentId",
                Type: "reference",
                Description: "ID of the PartnerNetworkConnection that you shared this record with. This field is available if you enabled Salesforce to Salesforce. This field is supported using API versions earlier than 15.0. In all other API versions, this field’s value is null. You can use the new PartnerNetworkRecordConnection object to forward records to connections.",
                Example: ""
            },
            ConfigureDuringSale: {
                Name: "ConfigureDuringSale",
                Type: "picklist",
                Description: "If true, the product can be configured during the sale. If false, the product can’t be configured during the sale.",
                Example: ""
            },
            CurrencyIsoCode: {
                Name: "CurrencyIsoCode",
                Type: "picklist",
                Description: "Available only for orgs with the multi-currency feature enabled. Contains the ISO code for any currency allowed by the org.",
            },
            Description: {
                Name: "Description",
                Type: "text",
                Description: "A text description of this record. Label is Product Description.",
                Example: ""
            },
            DisplayUrl: {
                Name: "DisplayUrl",
                Type: "url",
                Description: "URL leading to a specific version of a record in the linked external data source.",
                Example: ""
            },
            ExternalDataSourceId: {
                Name: "ExternalDataSourceId",
                Type: "reference",
                Description: "The ID of the external data source that contains the record.",
                Example: ""
            },
            ExternalId: {
                Name: "ExternalId",
                Type: "string",
                Description: "The record’s ID in the external system.",
                Example: ""
            },
            Family: {
                Name: "Family",
                Type: "picklist",
                Description: "The product family. For example, Hardware, Software, or Services.",
                Example: ""
            },
            IsActive: {
                Name: "IsActive",
                Type: "boolean",
                Description: "Indicates whether the product is active (true) or not (false).",
                Example: ""
            },
            IsArchived: {
                Name: "IsArchived",
                Type: "boolean",
                Description: "Indicates whether the product is archived (true) or not (false).",
                Example: ""
            },
            IsDeleted: {
                Name: "IsDeleted",
                Type: "boolean",
                Description: "Indicates whether the product has been deleted (true) or not (false).",
                Example: ""
            },
            IsSoldOnlyWithOtherProds: {
                Name: "IsSoldOnlyWithOtherProds",
                Type: "boolean",
                Description: "Indicates whether the product can be sold only with other products (true) or not (false).",
                Example: ""
            },
            LastReferencedDate: {
                Name: "LastReferencedDate",
                Type: "datetime",
                Description: "The timestamp for when the record was last referenced. Its label is Last Referenced Date.",
                Example: ""
            },
            LastViewedDate: {
                Name: "LastViewedDate",
                Type: "datetime",
                Description: "The timestamp for when the record was last viewed. Its label is Last Viewed Date.",
                Example: ""
            },
            NumberOfQuantityInstallments: {
                Name: "NumberOfQuantityInstallments",
                Type: "int",
                Description: "The number of quantity installments for the product.",
                Example: ""
            },
            NumberOfRevenueInstallments: {
                Name: "NumberOfRevenueInstallments",
                Type: "int",
                Description: "The number of revenue installments for the product.",
                Example: ""
            },
            ProductClass: {
                Name: "ProductClass",
                Type: "picklist",
                Description: "The product class. For example, Standard, Custom, or Optional.",
                Example: ""
            },
            ProductCode: {
                Name: "ProductCode",
                Type: "string",
                Description: "The product code.",
                Example: ""
            },
            QuantityInstallmentPeriod: {
                Name: "QuantityInstallmentPeriod",
                Type: "picklist",
                Description: "The period for the quantity installment. For example, Month or Year.",
                Example: ""
            },
            QuantityScheduleType: {
                Name: "QuantityScheduleType",
                Type: "picklist",
                Description: "The type of quantity schedule. For example, Even or Ramp.",
                Example: ""
            },
            QuantityUnitOfMeasure: {
                Name: "QuantityUnitOfMeasure",
                Type: "picklist",
                Description: "The unit of measure for the quantity. For example, Each or Hours.",
                Example: ""
            },
            RecalculateTotalPrice: {
                Name: "RecalculateTotalPrice",
                Type: "boolean",
                Description: "Indicates whether the total price is recalculated (true) or not (false).",
                Example: ""
            },
            RevenueInstallmentPeriod: {
                Name: "RevenueInstallmentPeriod",
                Type: "picklist",
                Description: "The period for the revenue installment. For example, Month or Year.",
                Example: ""
            },
            RevenueScheduleType: {
                Name: "RevenueScheduleType",
                Type: "picklist",
                Description: "The type of revenue schedule. For example, Even or Ramp.",
                Example: ""
            }
        }
        this.AssociatedObjects = {
            Product2ChangeEvent: new Product2ChangeEvent()
        }
    }
}

/**
 * Product2Fields interface represents the fields on the Product2 object.
 **/
interface Product2Fields {
    Description: Description;
    BillingPolicyId: BillingPolicyId;
    CanUseQuantitySchedule: CanUseQuantitySchedule;
    CanUseRevenueSchedule: CanUseRevenueSchedule;
    ConnectionReceivedId: ConnectionReceivedId;
    ConnectionSentId: ConnectionSentId;
    ConfigureDuringSale: ConfigureDuringSale;
    CurrencyIsoCode: CurrencyIsoCode;
    DisplayUrl: DisplayUrl;
    ExternalDataSourceId: ExternalDataSourceId;
    ExternalId: ExternalId;
    Family: Family;
    IsActive: IsActive;
    IsArchived: IsArchived;
    IsDeleted: IsDeleted;
    IsSoldOnlyWithOtherProds: IsSoldOnlyWithOtherProds;
    LastReferencedDate: LastReferencedDate;
    LastViewedDate: LastViewedDate;
    NumberOfQuantityInstallments: NumberOfQuantityInstallments;
    NumberOfRevenueInstallments: NumberOfRevenueInstallments;
    ProductClass: ProductClass;
    ProductCode: ProductCode;
    QuantityInstallmentPeriod: QuantityInstallmentPeriod;
    QuantityScheduleType: QuantityScheduleType;
    QuantityUnitOfMeasure: QuantityUnitOfMeasure;
    RecalculateTotalPrice: RecalculateTotalPrice;
    RevenueInstallmentPeriod: RevenueInstallmentPeriod;
    RevenueScheduleType: RevenueScheduleType;

}

interface AssociatedObjects {
    Product2ChangeEvent: Product2ChangeEvent;
    //Product2Feed: Product2Feed;
    //Product2History: Product2History;
    //Product2OwnerSharingRule: Product2OwnerSharingRule;
}

/**
 * Individual Product2 fields extend the base Field interface.
 **/
interface BillingPolicyId extends Field {
    Required: boolean;
    RelationShipName: string;
    RelationshipType: string;
    RefersTo: string;
}

interface CanUseQuantitySchedule extends Field {
    Example: string;
}

interface CanUseRevenueSchedule extends Field {
    Example: string;
}

interface ConnectionReceivedId extends Field {
    Example: string;
}

interface ConnectionSentId extends Field {
    Example: string;
}

interface ConfigureDuringSale extends Field {
    Example: string;
}

interface CurrencyIsoCode extends Field {
    Name: string;
    Type: string
    Description: string;
}

interface Description extends Field{
    Example: string;
}

interface DisplayUrl extends Field{
    Example: string;
}

interface ExternalDataSourceId extends Field {
    Example: string;
}

interface ExternalId extends Field {
    Example: string;
}

interface Family extends Field {
    Example: string;
}

interface IsActive extends Field {
    Example: string;
}

interface IsArchived extends Field {
    Example: string;
}

interface IsDeleted extends Field {
    Example: string;
}

interface IsSoldOnlyWithOtherProds extends Field {
    Example: string;
}

interface LastReferencedDate extends Field {
    Example: string;
}

interface LastViewedDate extends Field {
    Example: string;
}

interface Name extends Field {
    Example: string;
}

interface NumberOfQuantityInstallments extends Field {
    Example: string;
}

interface NumberOfRevenueInstallments extends Field {
    Example: string;
}

interface ProductClass extends Field {
    Example: string;
}

interface ProductCode extends Field {
    Example: string;
}

interface QuantityInstallmentPeriod extends Field {
    Example: string;
}

interface QuantityScheduleType extends Field {
    Example: string;
}

interface QuantityUnitOfMeasure extends Field {
    Example: string;
}

interface RecalculateTotalPrice extends Field {
    Example: string;
}

interface RevenueInstallmentPeriod extends Field {
    Example: string;
}

interface RevenueScheduleType extends Field {
    Example: string;
}

interface StockKeepingUnit {
    Example: string;
}

export { Product2 };
