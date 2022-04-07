import { useState } from "react";
import { useFormik } from "formik";
import Card from "@/components/Card";
import Checkbox from "@/components/Form/Checkbox";
import Input from "@/components/Form/Input";
import Heading from "@/components/Heading";
import Label from "@/components/Text";
import { SubscriptionCardProps } from "modules/account/views/Subscription";

const ShippingBilling = (props: SubscriptionCardProps) => {
  const { i18n } = props;
  const [readOnly, setReadOnly] = useState<boolean>(true);
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      shipName: "",
      cardNumber: "",
      cardExpDate: "",
      securityCode: "",
      shipZipCode: "",
    },
    onSubmit: (values) => {
      console.log("the values", values);
      // api actions
      setReadOnly(true);
    },
  });
  return (
    <div
      className="shipping-billing d-flex flex-column"
      style={{
        gap: "3rem",
      }}
    >
      <div className="d-flex justify-content-between align-items-center">
        <Heading variant="title">
          <span className="text-capitalize">
            {i18n._(/*i18n*/ "shipping & billing")}
          </span>
        </Heading>
        <button
          className="btn btn-primary text-uppercase"
          type="button"
          onClick={() =>
            readOnly ? setReadOnly(!readOnly) : formik.handleSubmit()
          }
        >
          {i18n._(/*i18n*/ readOnly ? "edit" : "save")}
        </button>
      </div>
      <div
        className="d-flex"
        style={{
          gap: "3rem",
        }}
      >
        <div className="flex-grow-1">
          <Card
            body={
              <div className="d-flex flex-column">
                <Heading variant="subTitle">
                  <h3 className="text-capitalize">
                    {i18n._(/*i18n*/ "shipping address")}
                  </h3>
                </Heading>
                <div className="form mt-4">
                  <div className="d-flex align-items-center">
                    <Label isCapitalized={true} customClass="w-25">
                      <span>{i18n._(/*i18n*/ "name")}</span>
                    </Label>
                    <Input
                      placeholder="NYPD"
                      name="name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      disabled={readOnly}
                    />
                  </div>
                  <div className="d-flex align-items-center mt-4">
                    <Label isCapitalized={true} customClass="w-25">
                      <span>{i18n._(/*i18n*/ "phone")}</span>
                    </Label>
                    <Input
                      placeholder="(123) 456-7890"
                      name="phone"
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      disabled={readOnly}
                    />
                  </div>
                  <div className="d-flex align-items-center mt-4">
                    <Label isCapitalized={true} customClass="w-25">
                      <span>{i18n._(/*i18n*/ "address")}</span>
                    </Label>
                    <Input
                      placeholder="99 Brooklyn St"
                      name="address"
                      value={formik.values.address}
                      onChange={formik.handleChange}
                      disabled={readOnly}
                    />
                  </div>
                  <div className="d-flex align-items-center mt-4">
                    <Label isCapitalized={true} customClass="w-25">
                      <span>{i18n._(/*i18n*/ "city")}</span>
                    </Label>
                    <Input
                      placeholder="Brooklyn"
                      name="city"
                      value={formik.values.city}
                      onChange={formik.handleChange}
                      disabled={readOnly}
                    />
                  </div>
                  <div className="d-flex align-items-center mt-4">
                    <Label isCapitalized={true} customClass="w-25">
                      <span>{i18n._(/*i18n*/ "State/Region")}</span>
                    </Label>
                    <Input
                      placeholder="NY"
                      name="state"
                      value={formik.values.state}
                      onChange={formik.handleChange}
                      disabled={readOnly}
                    />
                  </div>
                  <div className="d-flex align-items-center mt-4">
                    <Label isCapitalized={true} customClass="w-25">
                      <span>{i18n._(/*i18n*/ "ZIP/Postal code")}</span>
                    </Label>
                    <Input
                      placeholder="11201"
                      name="zipCode"
                      value={formik.values.zipCode}
                      onChange={formik.handleChange}
                      disabled={readOnly}
                    />
                  </div>
                </div>
              </div>
            }
          />
        </div>
        <div className="flex-grow-1">
          <Card
            body={
              <div className="d-flex flex-column">
                <Heading variant="subTitle">
                  <h3 className="text-capitalize">
                    {i18n._(/*i18n*/ "billing")}
                  </h3>
                </Heading>
                <div className="form mt-4">
                  <div className="d-flex align-items-center">
                    <Label isCapitalized={true} customClass="w-25">
                      <span>{i18n._(/*i18n*/ "name")}</span>
                    </Label>
                    <Input
                      placeholder="NYPD"
                      name="shipName"
                      value={formik.values.shipName}
                      onChange={formik.handleChange}
                      disabled={readOnly}
                    />
                  </div>
                  <div className="d-flex align-items-center mt-4">
                    <Label isCapitalized={true} customClass="w-25">
                      <span>{i18n._(/*i18n*/ "card")}</span>
                    </Label>
                    <Input
                      placeholder="... ... ..."
                      name="cardNumber"
                      type="text"
                      value={formik.values.cardNumber}
                      onChange={formik.handleChange}
                      disabled={readOnly}
                    />
                  </div>
                  <div className="d-flex align-items-center mt-4">
                    <Label isCapitalized={true} customClass="w-25">
                      <span>{i18n._(/*i18n*/ "exp date")}</span>
                    </Label>
                    <Input
                      placeholder="01/2027"
                      name="cardExpDate"
                      value={formik.values.cardExpDate}
                      onChange={formik.handleChange}
                      type="date"
                      disabled={readOnly}
                    />
                  </div>
                  <div className="d-flex align-items-center mt-4">
                    <Label isCapitalized={true} customClass="w-25">
                      <span>{i18n._(/*i18n*/ "security code")}</span>
                    </Label>
                    <Input
                      placeholder="..."
                      name="securityCode"
                      value={formik.values.securityCode}
                      onChange={formik.handleChange}
                      type="password"
                      disabled={readOnly}
                    />
                  </div>
                  <div className="d-flex align-items-center mt-4">
                    <Label isCapitalized={true} customClass="w-25">
                      <span>{i18n._(/*i18n*/ "ZIP/Postal code")}</span>
                    </Label>
                    <Input
                      placeholder="11201"
                      name="shipZipCode"
                      value={formik.values.shipZipCode}
                      onChange={formik.handleChange}
                      disabled={readOnly}
                    />
                  </div>
                  <div className="d-flex align-items-center mt-4">
                    <Label isCapitalized={true} customClass="w-25 mt-3">
                      <span>{i18n._(/*i18n*/ "address")}</span>
                    </Label>
                    <div
                      className="d-flex align-items-center mt-3"
                      style={{
                        gap: 4,
                      }}
                    >
                      <Checkbox checked />
                      <Label isCapitalized={true} variant="body">
                        <span>
                          {i18n._(/*i18n*/ "Same as Shipping Address")}
                        </span>
                      </Label>
                    </div>
                  </div>
                </div>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ShippingBilling;
