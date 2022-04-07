import Card from "@/components/Card";
import Input from "@/components/Form/Input";
import Switch from "@/components/Form/Switch";
import Heading from "@/components/Heading";
import React, { useState } from "react";
import { useFormik } from "formik";
import Label from "@/components/Text";
interface AccountViewProps {
  i18n: any;
}
const AccountView = (props: AccountViewProps) => {
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
      orgName: "",
      orgPhone: "",
      orgAddress: "",
      orgCity: "",
      orgState: "",
      orgZipCode: "",
      email: "",
      password: "",
      twoFactor: false,
    },
    onSubmit: (values) => {
      console.log("the values", values);
      // api action & furter actions
      setReadOnly(true);
    },
  });

  return (
    <div
      className="d-flex flex-column"
      style={{
        gap: "3rem",
      }}
    >
      <div className="d-flex justify-content-between align-items-center">
        <Heading variant="title">
          <span className="text-capitalize">{i18n._(/*i18n*/ "profile")}</span>
        </Heading>
        <button
          className="btn btn-primary text-uppercase"
          type="button"
          onClick={() =>
            readOnly ? setReadOnly(false) : formik.handleSubmit()
          }
        >
          {i18n._(/*i18n*/ readOnly ? "edit" : "save")}
        </button>
      </div>
      <div
        className="d-flex flex-wrap"
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
                    {i18n._(/*i18n*/ "my info")}
                  </h3>
                </Heading>
                <div className="form mt-4">
                  <div
                    className="d-flex align-items-center"
                    style={{
                      gap: "1rem",
                    }}
                  >
                    <Label isCapitalized={true} customClass="w-25">
                      <span>{i18n._(/*i18n*/ "name")}</span>
                    </Label>
                    <Input
                      placeholder={i18n._(/*i18n*/ "your name")}
                      name="name"
                      disabled={readOnly}
                      value={formik.values.name}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div
                    className="d-flex align-items-center mt-4"
                    style={{
                      gap: "1rem",
                    }}
                  >
                    <Label isCapitalized={true} customClass="w-25">
                      <span>{i18n._(/*i18n*/ "phone")}</span>
                    </Label>
                    <Input
                      placeholder={i18n._(/*i18n*/ "phone number")}
                      name="phone"
                      disabled={readOnly}
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div
                    className="d-flex align-items-center mt-4"
                    style={{
                      gap: "1rem",
                    }}
                  >
                    <Label isCapitalized={true} customClass="w-25">
                      <span>{i18n._(/*i18n*/ "address")}</span>
                    </Label>
                    <Input
                      placeholder={i18n._(/*i18n*/ "your address")}
                      name="address"
                      disabled={readOnly}
                      value={formik.values.address}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div
                    className="d-flex align-items-center mt-4"
                    style={{
                      gap: "1rem",
                    }}
                  >
                    <Label isCapitalized={true} customClass="w-25">
                      <span>{i18n._(/*i18n*/ "city")}</span>
                    </Label>
                    <Input
                      placeholder={i18n._(/*i18n*/ "city")}
                      name="city"
                      disabled={readOnly}
                      value={formik.values.city}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div
                    className="d-flex align-items-center mt-4"
                    style={{
                      gap: "1rem",
                    }}
                  >
                    <Label isCapitalized={true} customClass="w-25">
                      <span>{i18n._(/*i18n*/ "State/Region")}</span>
                    </Label>
                    <Input
                      placeholder={i18n._(/*i18n*/ "state/region")}
                      name="state"
                      disabled={readOnly}
                      value={formik.values.state}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div
                    className="d-flex align-items-center mt-4"
                    style={{
                      gap: "1rem",
                    }}
                  >
                    <Label isCapitalized={true} customClass="w-25">
                      <span>{i18n._(/*i18n*/ "ZIP/Postal code")}</span>
                    </Label>
                    <Input
                      placeholder={i18n._(/*i18n*/ "ZIP/Postal code")}
                      name="zipCode"
                      disabled={readOnly}
                      value={formik.values.zipCode}
                      onChange={formik.handleChange}
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
                    {i18n._(/*i18n*/ "organization info")}
                  </h3>
                </Heading>
                <div className="form mt-4">
                  <div
                    className="d-flex align-items-center"
                    style={{
                      gap: "1rem",
                    }}
                  >
                    <Label isCapitalized={true} customClass="w-25">
                      <span>{i18n._(/*i18n*/ "name")}</span>
                    </Label>
                    <Input
                      placeholder={i18n._(/*i18n*/ "org name")}
                      name="orgName"
                      disabled={readOnly}
                      value={formik.values.orgName}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div
                    className="d-flex align-items-center mt-4"
                    style={{
                      gap: "1rem",
                    }}
                  >
                    <Label isCapitalized={true} customClass="w-25">
                      <span>{i18n._(/*i18n*/ "phone")}</span>
                    </Label>
                    <Input
                      placeholder={i18n._(/*i18n*/ "org phone")}
                      name="orgPhone"
                      disabled={readOnly}
                      value={formik.values.orgPhone}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div
                    className="d-flex align-items-center mt-4"
                    style={{
                      gap: "1rem",
                    }}
                  >
                    <Label isCapitalized={true} customClass="w-25">
                      <span>{i18n._(/*i18n*/ "address")}</span>
                    </Label>
                    <Input
                      placeholder={i18n._(/*i18n*/ "org address")}
                      name="orgAddress"
                      disabled={readOnly}
                      value={formik.values.orgAddress}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div
                    className="d-flex align-items-center mt-4"
                    style={{
                      gap: "1rem",
                    }}
                  >
                    <Label isCapitalized={true} customClass="w-25">
                      <span>{i18n._(/*i18n*/ "city")}</span>
                    </Label>
                    <Input
                      placeholder={i18n._(/*i18n*/ "org city")}
                      name="orgCity"
                      disabled={readOnly}
                      value={formik.values.orgCity}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div
                    className="d-flex align-items-center mt-4"
                    style={{
                      gap: "1rem",
                    }}
                  >
                    <Label isCapitalized={true} customClass="w-25">
                      <span>{i18n._(/*i18n*/ "State/Region")}</span>
                    </Label>
                    <Input
                      placeholder={i18n._(/*i18n*/ "org state")}
                      name="orgState"
                      disabled={readOnly}
                      value={formik.values.orgState}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div
                    className="d-flex align-items-center mt-4"
                    style={{
                      gap: "1rem",
                    }}
                  >
                    <Label isCapitalized={true} customClass="w-25">
                      <span>{i18n._(/*i18n*/ "Org ZIP/Postal code")}</span>
                    </Label>
                    <Input
                      placeholder={i18n._(/*i18n*/ "Org ZIP/Postal code")}
                      name="orgZipCode"
                      disabled={readOnly}
                      value={formik.values.orgZipCode}
                      onChange={formik.handleChange}
                    />
                  </div>
                </div>
              </div>
            }
          />
        </div>
      </div>
      <div className="custom-card">
        <div
          className="w-50"
          style={{
            marginLeft: "-17px",
          }}
        >
          <Card
            body={
              <div className="d-flex flex-column">
                <Heading variant="subTitle">
                  <h3 className="text-capitalize">
                    {i18n._(/*i18n*/ "privacy & security")}
                  </h3>
                </Heading>
                <div className="form mt-4">
                  <div className="d-flex align-items-center">
                    <Label isCapitalized={true} customClass="w-25">
                      <span>{i18n._(/*i18n*/ "email")}</span>
                    </Label>
                    <Input
                      placeholder={i18n._(/*i18n*/ "your email")}
                      name="email"
                      disabled={readOnly}
                      value={formik.values.email}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div>
                    <div className="d-flex align-items-center mt-4">
                      <Label isCapitalized={true} customClass="w-25">
                        <span>{i18n._(/*i18n*/ "password")}</span>
                      </Label>
                      <Input
                        placeholder="*****"
                        name="password"
                        disabled={readOnly}
                        type="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                      />
                    </div>
                    <div className="d-flex mt-2">
                      <div className="w-25" />
                      <Label
                        isCapitalized={true}
                        customClass="w-25"
                        variant="body"
                      >
                        <span> {i18n._(/*i18n*/ "change password")}</span>
                      </Label>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mt-4">
                    <Label isCapitalized={true} customClass="w-25">
                      <span>
                        {i18n._(/*i18n*/ "two-factor authentication")}
                      </span>
                    </Label>
                    <Switch
                      name="twoFactor"
                      checked={formik.values.twoFactor}
                      onChange={formik.handleChange}
                    />
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

export default AccountView;
