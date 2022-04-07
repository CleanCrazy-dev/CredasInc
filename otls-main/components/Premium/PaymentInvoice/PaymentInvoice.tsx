import { formatMoney } from "@/utils/formatter";
import { i18n } from "@lingui/core";
import { useMemo } from "react";

export type PaymentInvoiceFeeType = {
  name: string;
  price: number;
};

export type PaymentInvoiceItemType = {
  name: string;
  price: number;
};

export interface PaymentInvoiceProps {
  items: PaymentInvoiceItemType[];
  subtotalLabel?: string;
  fees?: PaymentInvoiceFeeType[];
}

const PaymentInvoice = ({
  items,
  fees,
  subtotalLabel,
}: PaymentInvoiceProps) => {
  const subtotalPrice = useMemo<number>(() => {
    return items.reduce((acc, cur) => acc + cur.price, 0);
  }, [items]);

  const totalPrice = useMemo<number>(() => {
    return (
      subtotalPrice + (fees!.reduce((acc, cur) => acc + cur.price, 0) || 0)
    );
  }, [subtotalPrice, fees]);

  return (
    <div className="border-t border-gray-300 pt-6 text-lg">
      {items.map((item, index) => (
        <div key={index} className="flex items-center font-bold mb-4 last:mb-0">
          <span className="basis-2/6">{i18n._(/*i18n*/ "Item")}</span>
          <span className="basis-4/6">{item.name}</span>
        </div>
      ))}
      <div className="flex flex-col gap-y-2">
        <div className="flex items-center">
          <span className="basis-2/6">
            {subtotalLabel || i18n._(/*i18n*/ "Subtotal")}
          </span>
          <span className="basis-4/6">{formatMoney(subtotalPrice)}</span>
        </div>
        {fees?.map((fee, index) => (
          <div key={index} className="flex items-center">
            <span className="basis-2/6">{fee.name}</span>
            <span className="basis-4/6">{formatMoney(fee.price)}</span>
          </div>
        ))}
        <div className="flex items-center font-bold border-t border-gray-300 pt-2">
          <span className="basis-2/6">{i18n._(/*i18n*/ "Total")}</span>
          <span className="basis-4/6">{formatMoney(totalPrice)}</span>
        </div>
      </div>
    </div>
  );
};

export default PaymentInvoice;
