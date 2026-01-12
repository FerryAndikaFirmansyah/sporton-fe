import CardWithHeader from "../ui/card-with-header";

const OrderInformation = () => {
  return (
    <CardWithHeader title="Order Information">
      <div className="p-5 space-y-4">
        <div className="flex flex-col gap-1">
          <label
            htmlFor="full_name"
            className="text-sm font-medium text-gray-700"
          >
            Full Name
          </label>
          <input
            id="full_name"
            type="text"
            placeholder="Type your full name"
            className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="wa_number"
            className="text-sm font-medium text-gray-700"
          >
            Whatsapp Number
          </label>
          <input
            id="wa_number"
            type="text"
            placeholder="Type your whatsapp number"
            className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="shipping_address"
            className="text-sm font-medium text-gray-700"
          >
            Shipping Address
          </label>
          <textarea
            id="shipping_address"
            rows={5}
            placeholder="Type your shipping address"
            className="border border-gray-300 rounded-md px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>
    </CardWithHeader>
  );
};

export default OrderInformation;
