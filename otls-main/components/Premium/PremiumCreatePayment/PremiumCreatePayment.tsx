import { InputField, InputSelect } from "@/components/Input";
import { InputRadio } from "@/components/Input/InputRadio";
import { i18n } from "@lingui/core";

export interface PremiumCreatePaymentProps {
  onChangePaymentType: (type: "check" | "card") => void;
  paymentType: "check" | "card";
}

const PremiumCreatePayment = ({
  paymentType,
  onChangePaymentType,
}: PremiumCreatePaymentProps) => {
  return (
    <>
      <div className="mb-10">
        <InputRadio
          label={
            <span className="font-bold text-base-sm">
              {i18n._(/*i18n*/ "How will you be paying?")}
            </span>
          }
          inputName="payment_type"
          options={[
            {
              label: "Card",
              value: "card",
              defaultChecked: true,
            },
            {
              label: "Check",
              value: "check",
            },
          ]}
          htmlProps={{
            onChange: (e) =>
              onChangePaymentType(e.target.value as "card" | "check"),
          }}
        />
      </div>
      {paymentType === "card" && (
        <div className="flex flex-col gap-y-4">
          <InputField
            type="text"
            label={i18n._(/*i18n*/ "Name")}
            labelPoition="side"
            labelFor="payment_name"
          />
          <InputField
            type="text"
            label={i18n._(/*i18n*/ "Phone")}
            labelPoition="side"
            labelFor="payment_phone"
          />
          <InputField
            type="number"
            label={i18n._(/*i18n*/ "Card")}
            labelPoition="side"
            labelFor="payment_card"
          />
          <InputField
            type="date"
            label={i18n._(/*i18n*/ "Exp. Date")}
            labelPoition="side"
            labelFor="payment_exp_date"
          />
          <InputField
            type="text"
            label={i18n._(/*i18n*/ "Security Code")}
            labelPoition="side"
            labelFor="payment_security_code"
          />
          <InputField
            type="text"
            label={i18n._(/*i18n*/ "Address")}
            labelPoition="side"
            labelFor="payment_address"
          />
          <InputField
            type="text"
            label={i18n._(/*i18n*/ "City")}
            labelPoition="side"
            labelFor="payment_city"
          />
          <InputSelect
            label={i18n._(/*i18n*/ "State")}
            labelPoition="side"
            htmlProps={{ defaultValue: "default" }}
            labelFor="payment_state"
            options={[
              {
                title: "Select",
                htmlProps: {
                  value: "default",
                },
              },
            ]}
          />
          <InputField
            type="text"
            label={i18n._(/*i18n*/ "Zip Code")}
            labelPoition="side"
            labelFor="payment_zip_code"
          />
        </div>
      )}
      {paymentType === "check" && (
        <div>
          <p className="mb-0">
            {i18n._(
              /*i18n*/ "Make your check payable to CTIP and mail to 3049 - 34th St. N Lethbridge, AB T1H 7C4. Your membership benefits will be available once your check clears. Thank you."
            )}
          </p>
        </div>
      )}
    </>
  );
};

export default PremiumCreatePayment;
