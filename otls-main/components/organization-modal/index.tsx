import { combineCSSClasses } from "@credasinc/ctip-ui/utils/html";
import { US_STATES_AND_CANADIAN_TERRITORIES } from "../../constants";
import { useState } from "react";
import { Modal, ProgressBar } from "react-bootstrap";
import UserAvatar from "../Avatar";
import DropdownList from "../Dropdown-list";
import TagsInput from "../TagsInput";
import UploadButton from "../Upload-button";
import style from "./organization-modal.module.scss";
import { i18n } from "@lingui/core";
import sanitizeHtml from "sanitize-html";
interface OrganizationModalProps {
  showModal: boolean;
  handleClose: () => any;
}

const sanitizePaymentDone = (value: string) => {
  return sanitizeHtml(value, {
    allowedTags: ["b"],
  });
};

const NewOrganizationInputStep1 = () => {
  return (
    <>
      <p className={combineCSSClasses("text-bold", style["subtitle"])}>
        {i18n._(/*i18n*/ "Details")}
      </p>
      <div className={combineCSSClasses("row", style["mt-24px"])}>
        <div className="col-3">
          <UserAvatar src={""} rounded={true} alt="user-img" />
        </div>
        <div className="col-9 m-auto">
          <UploadButton
            color="none"
            className={combineCSSClasses(style["grey-btn"])}
          >
            {i18n._(/*i18n*/ "UPLOAD PHOTO")}
          </UploadButton>
        </div>
      </div>
      <div className={combineCSSClasses("row", style["mt-24px"])}>
        <div className="col-3">
          <label className={style["input-label"]}>
            {i18n._(/*i18n*/ "Name")}
          </label>
        </div>
        <div className="col-9">
          <input type="text" className={combineCSSClasses(style["input"])} />
        </div>
      </div>
      <div className={combineCSSClasses("row", style["mt-8px"])}>
        <div className="col-3">
          <label className={style["input-label"]}>
            {i18n._(/*i18n*/ "Type")}
          </label>
        </div>
        <div className="col-9">
          <DropdownList defaultValue={"school"}>
            <option value="school">{i18n._(/*i18n*/ "School")}</option>
            <option value="other">{i18n._(/*i18n*/ "Other")}</option>
          </DropdownList>
        </div>
      </div>
      <div className={combineCSSClasses("row", style["mt-8px"])}>
        <div className="col-3">
          <label className={style["input-label"]}>
            {i18n._(/*i18n*/ "Contact Name")}
          </label>
        </div>
        <div className="col-9">
          <input type="text" className={combineCSSClasses(style["input"])} />
        </div>
      </div>
      <div className={combineCSSClasses("row", style["mt-8px"])}>
        <div className="col-3">
          <label className={style["input-label"]}>
            {i18n._(/*i18n*/ "Email")}
          </label>
        </div>
        <div className="col-9">
          <input type="text" className={combineCSSClasses(style["input"])} />
        </div>
      </div>
      <div className={combineCSSClasses("row", style["mt-8px"])}>
        <div className="col-3">
          <label className={style["input-label"]}>
            {i18n._(/*i18n*/ "Phone")}
          </label>
        </div>
        <div className="col-9">
          <input type="text" className={combineCSSClasses(style["input"])} />
        </div>
      </div>
      <div className={combineCSSClasses("row", style["mt-8px"])}>
        <div className="col-3">
          <label className={style["input-label"]}>
            {i18n._(/*i18n*/ "Address")}
          </label>
        </div>
        <div className="col-9">
          <input
            type="text"
            className={combineCSSClasses(style["input"])}
            placeholder={i18n._(/*i18n*/ "Street")}
          />
          <div className={combineCSSClasses("row", style["mt-8px"])}>
            <div className={combineCSSClasses("col-6", style["pr-0px"])}>
              <input
                type="text"
                className={combineCSSClasses(style["input"])}
                placeholder={i18n._(/*i18n*/ "City")}
              />
            </div>
            <div
              className={combineCSSClasses(
                "col-3",
                style["pr-0px"],
                style["pl-8px"]
              )}
            >
              <input
                type="text"
                className={combineCSSClasses(style["input"])}
                list="regions"
              />
            </div>
            <div className={combineCSSClasses("col-3", style["pl-8px"])}>
              <input
                type="text"
                className={combineCSSClasses(style["input"])}
                placeholder={i18n._(/*i18n*/ "ZIP/Postal code")}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const NewOrganizationInputStep2 = () => {
  return (
    <>
      <p className={combineCSSClasses("text-bold", style["subtitle"])}>
        {i18n._(/*i18n*/ "Plan Type")}
      </p>
      <p className={style["text-description"]}>
        {i18n._(
          /*i18n*/ "If you know what plan this organization has, you can select it here. You can also let the organization set this up at a later time."
        )}
      </p>

      <div className={combineCSSClasses("row", style["mt-24px"])}>
        <div className="col-3">
          <label className={style["input-label"]}>
            {i18n._(/*i18n*/ "Plan Type")}
          </label>
        </div>
        <div className="col-9">
          <DropdownList defaultValue={""}>
            <option value="">{i18n._(/*i18n*/ "Select Type")}</option>
            <option value="type1">Type 1</option>
            <option value="type2">Type 2</option>
          </DropdownList>
        </div>
      </div>
      <p
        className={combineCSSClasses(
          "text-bold",
          style["subtitle"],
          style["mt-24px"]
        )}
      >
        {i18n._(/*i18n*/ "Add Members")}
      </p>
      <p className={style["text-description"]}>
        {i18n._(
          /*i18n*/ "Each member will add $100/yr to the membership cost. Members can also be added at a later time."
        )}
      </p>

      <div>
        <TagsInput />
      </div>
      <p
        className={combineCSSClasses(
          style["text-description"],
          style["mt-8px"]
        )}
      >
        {i18n._(/*i18n*/ "Add multiple, separate with commas")}
      </p>
      <div className={combineCSSClasses("row", style["mt-8px"])}>
        <div className="col-6">
          <div className="d-flex align-items-center">
            <UserAvatar
              src={"/Profile.jpeg"}
              size="small"
              rounded={true}
              alt="user-img"
            />{" "}
            <div className={combineCSSClasses(style["ml-16px"])}>
              Dog dog (you)
            </div>
          </div>
        </div>
        <div className="col-6 m-auto text-right">dogdog@dog.com</div>
      </div>

      <div className={combineCSSClasses("row", style["mt-8px"])}>
        <div className="col-6">
          <div className="d-flex align-items-center">
            <UserAvatar
              src={"/Profile.jpeg"}
              size="small"
              rounded={true}
              alt="user-img"
            />{" "}
            <div className={combineCSSClasses(style["ml-16px"])}>Dog dog</div>
          </div>
        </div>
        <div className="col-6 m-auto text-right">dogdog@dog.com</div>
      </div>

      <div className={combineCSSClasses("row", style["mt-8px"])}>
        <div className="col-6">
          <div className="d-flex align-items-center">
            <UserAvatar
              src={"/Profile.jpeg"}
              size="small"
              rounded={true}
              alt="user-img"
            />{" "}
            <div className={combineCSSClasses(style["ml-16px"])}>Dog dog</div>
          </div>
        </div>
        <div className="col-6 m-auto text-right">dogdog@dog.com</div>
      </div>
    </>
  );
};

const NewOrganizationInputStep3 = ({
  paymentMethod,
  setPaymentMethod,
}: any) => {
  const handlePaymentMethodChange = (e: any) => {
    setPaymentMethod(e.target.value);
  };
  return (
    <>
      <p className={combineCSSClasses("text-bold", style["subtitle"])}>
        {i18n._(/*i18n*/ "Payment")}
      </p>
      <p className={style["text-description"]}>
        {i18n._(
          /*i18n*/ "You can enter the payment for the organization, or they can do this at a later time. Their membership will not begin until payment is collected."
        )}
      </p>

      <p className={combineCSSClasses("text-bold", style["subtitle"])}>
        {i18n._(/*i18n*/ "Payment method")}
      </p>
      <div className="d-flex gap-5">
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="payment_method"
            value="card"
            checked={paymentMethod == "card"}
            onChange={handlePaymentMethodChange}
          />
          <label className="form-check-label">{i18n._(/*i18n*/ "Card")}</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="payment_method"
            value="check"
            checked={paymentMethod == "check"}
            onChange={handlePaymentMethodChange}
          />
          <label className="form-check-label">{i18n._(/*i18n*/ "Check")}</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="payment_method"
            value="payLater"
            checked={paymentMethod == "payLater"}
            onChange={handlePaymentMethodChange}
          />
          <label className="form-check-label">
            {i18n._(/*i18n*/ "Pay Later")}
          </label>
        </div>
      </div>

      {switchPaymentMethod(paymentMethod)}
      {paymentMethod != "payLater" ? (
        <table
          className={combineCSSClasses(
            "w-100",
            style["table"],
            style["mt-16px"]
          )}
        >
          <thead>
            <tr>
              <th className="col-3">{i18n._(/*i18n*/ "Item")}</th>
              <th>{i18n._(/*i18n*/ "1 Year Enterprise")}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="col-3">{i18n._(/*i18n*/ "Enterprise Fee")}</td>
              <td>$500.00</td>
            </tr>
            <tr>
              <td className="col-3">6 {i18n._(/*i18n*/ "Users")}</td>
              <td>$600.00</td>
            </tr>
            <tr>
              <td className="col-3">{i18n._(/*i18n*/ "Tax")}</td>
              <td>$110.00</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th className="col-3">{i18n._(/*i18n*/ "Total")}</th>
              <th>$1,210.00</th>
            </tr>
          </tfoot>
        </table>
      ) : (
        <></>
      )}
    </>
  );
};

const NewOrganizationInputStep4 = ({ paymentMethod }: any) => {
  return switchPaymentMethodDone(paymentMethod);
};

const CardPayementMethod = () => {
  return (
    <>
      <div className={combineCSSClasses("row", style["mt-24px"])}>
        <div className="col-3">
          <label className={style["input-label"]}>
            {" "}
            {i18n._(/*i18n*/ "Name")}
          </label>
        </div>
        <div className="col-9">
          <input type="text" className={combineCSSClasses(style["input"])} />
        </div>
      </div>

      <div className={combineCSSClasses("row", style["mt-8px"])}>
        <div className="col-3">
          <label className={style["input-label"]}>
            {i18n._(/*i18n*/ "Card")}
          </label>
        </div>
        <div className="col-9">
          <input
            id="ccn"
            type="text"
            className={combineCSSClasses(style["input"])}
            inputMode="numeric"
            pattern="[0-9\s]{13,19}"
            autoComplete="cc-number"
            maxLength={19}
            placeholder=".... .... .... ...."
            required={true}
          />

          <div className={combineCSSClasses("row", style["mt-8px"])}>
            <div className={combineCSSClasses("col-6", style["pr-0px"])}>
              <input
                type="date"
                className={combineCSSClasses(style["input"])}
                placeholder={i18n._(/*i18n*/ "Expire Date")}
              />
            </div>

            <div className={combineCSSClasses("col-6", style["pl-8px"])}>
              <input
                type="text"
                className={combineCSSClasses(style["input"])}
                placeholder={i18n._(/*i18n*/ "Security Code")}
                inputMode="numeric"
                pattern="[0-9]{3,4}"
              />
            </div>
          </div>
        </div>
      </div>

      <div className={combineCSSClasses("row", style["mt-8px"])}>
        <div className="col-3">
          <label className={style["input-label"]}>
            {i18n._(/*i18n*/ "Address")}
          </label>
        </div>
        <div className="col-9">
          <input
            type="text"
            className={combineCSSClasses(style["input"])}
            placeholder={i18n._(/*i18n*/ "Street")}
          />
          <div className={combineCSSClasses("row", style["mt-8px"])}>
            <div className={combineCSSClasses("col-6", style["pr-0px"])}>
              <input
                type="text"
                className={combineCSSClasses(style["input"])}
                placeholder={i18n._(/*i18n*/ "City")}
              />
            </div>
            <div
              className={combineCSSClasses(
                "col-3",
                style["pr-0px"],
                style["pl-8px"]
              )}
            >
              <input
                type="text"
                className={combineCSSClasses(style["input"])}
                list="regions"
              />
            </div>
            <div className={combineCSSClasses("col-3", style["pl-8px"])}>
              <input
                type="text"
                className={combineCSSClasses(style["input"])}
                placeholder={i18n._(/*i18n*/ "ZIP/Postal code")}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const CheckPaymentMethod = () => {
  return (
    <p className="base-text mt-16px mb-16px">
      {i18n._(
        /*i18n*/ "Make the check payable to CTIP and mail to 3049 - 34th St. N Lethbridge, AB T1H 7C4. Membership benefits will be available once their check clears."
      )}
    </p>
  );
};

const PayLaterPaymentMethod = () => {
  return (
    <p className="base-text mt-16px mb-16px">
      {i18n._(
        /*i18n*/ "The organization will be reponsible for paying their bill."
      )}
    </p>
  );
};

const CardPayementMethodDone = () => {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <svg
          width="66"
          height="66"
          viewBox="0 0 66 66"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.625 33C0.625 15.1215 15.1215 0.625 33 0.625C50.8785 0.625 65.375 15.1215 65.375 33C65.375 50.8785 50.8785 65.375 33 65.375C15.1215 65.375 0.625 50.8785 0.625 33ZM9.875 33L28.375 51.5L56.125 23.75L49.6211 17.2461L28.375 38.4922L16.3789 26.4961L9.875 33Z"
            fill="#28A745"
          />
        </svg>
      </div>
      <div>
        <p
          className={combineCSSClasses(
            "text-bold text-center",
            style["subtitle"],
            style["mt-16px"]
          )}
        >
          {i18n._(/*i18n*/ "Payment Complete")}
        </p>
        <p
          className={combineCSSClasses(
            "text-center",
            style["text-description"],
            style["mt-16px"]
          )}
        >
          {i18n._(/*i18n*/ "Let the organization know that they're all set.")}
        </p>
      </div>
    </div>
  );
};

const CheckPaymentMethodDone = () => {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <svg
          width="66"
          height="48"
          viewBox="0 0 66 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.625 5.5C0.625 2.9418 2.6918 0.875 5.25 0.875H60.75C63.3082 0.875 65.375 2.9418 65.375 5.5V42.5C65.375 45.0582 63.3082 47.125 60.75 47.125H5.25C2.6918 47.125 0.625 45.0582 0.625 42.5V5.5ZM33.0002 29.8246L8.67562 5.5C7.08577 5.91914 5.82835 7.17656 5.40921 8.76641L20.4838 23.841L5.40921 38.9156C5.82835 40.5055 7.08577 41.7629 8.67562 42.182L23.7502 27.1074L33.0002 36.3574L42.2502 27.1074L57.3248 42.182C58.9147 41.7629 60.1721 40.5055 60.5912 38.9156L45.5166 23.841L60.5912 8.76641C60.1721 7.17656 58.9147 5.91914 57.3248 5.5L33.0002 29.8246Z"
            fill="#28A745"
          />
        </svg>
      </div>
      <div>
        <p
          className={combineCSSClasses(
            "text-bold text-center",
            style["subtitle"],
            style["mt-16px"]
          )}
        >
          {i18n._(/*i18n*/ "Payment Pending")}
        </p>
        <p
          className={combineCSSClasses(
            "text-left",
            style["text-description"],
            style["mt-16px"]
          )}
          dangerouslySetInnerHTML={{
            __html: sanitizePaymentDone(`${i18n._(
              "The organization must mail a check of {price} payable to CTIP to {address}.",
              {
                address: "<b>3049 - 34th St. N Lethbridge, AB T1H 7C4</b>",
                price: "<b>$1,210</b>",
              }
            )}
          ${i18n._(
            "Membership benefits will be available once their check clears. If you have mailed the check for them, no more steps need to be taken."
          )}`),
          }}
        ></p>
      </div>
    </div>
  );
};

const PayLaterPaymentMethodDone = () => {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <svg
          width="66"
          height="48"
          viewBox="0 0 66 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.625 5.5C0.625 2.9418 2.6918 0.875 5.25 0.875H60.75C63.3082 0.875 65.375 2.9418 65.375 5.5V42.5C65.375 45.0582 63.3082 47.125 60.75 47.125H5.25C2.6918 47.125 0.625 45.0582 0.625 42.5V5.5ZM33.0002 29.8246L8.67562 5.5C7.08577 5.91914 5.82835 7.17656 5.40921 8.76641L20.4838 23.841L5.40921 38.9156C5.82835 40.5055 7.08577 41.7629 8.67562 42.182L23.7502 27.1074L33.0002 36.3574L42.2502 27.1074L57.3248 42.182C58.9147 41.7629 60.1721 40.5055 60.5912 38.9156L45.5166 23.841L60.5912 8.76641C60.1721 7.17656 58.9147 5.91914 57.3248 5.5L33.0002 29.8246Z"
            fill="#28A745"
          />
        </svg>
      </div>
      <div>
        <p
          className={combineCSSClasses(
            "text-bold text-center",
            style["subtitle"],
            style["mt-16px"]
          )}
        >
          {i18n._(/*i18n*/ "Payment Pending")}
        </p>
        <p
          className={combineCSSClasses(
            "text-left",
            style["text-description"],
            style["mt-16px"]
          )}
          dangerouslySetInnerHTML={{
            __html: sanitizePaymentDone(`${i18n._(
              "The organization must either pay online or mail a check of {price} payable to CTIP to {address}.",
              {
                address: "<b>3049 - 34th St. N Lethbridge, AB T1H 7C4</b>",
                price: "<b>$1,210</b>",
              }
            )}
          ${i18n._(
            "Membership benefits will be available once their check clears. If you have mailed the check for them, no more steps need to be taken."
          )}`),
          }}
        ></p>
      </div>
    </div>
  );
};

const switchPaymentMethod = (method: string) => {
  switch (method) {
    case "card":
      return <CardPayementMethod />;
    case "check":
      return <CheckPaymentMethod />;
    case "payLater":
      return <PayLaterPaymentMethod />;
    default:
      return <CardPayementMethod />;
  }
};

const switchPaymentMethodDone = (method: string) => {
  switch (method) {
    case "card":
      return <CardPayementMethodDone />;
    case "check":
      return <CheckPaymentMethodDone />;
    case "payLater":
      return <PayLaterPaymentMethodDone />;
    default:
      return <CardPayementMethodDone />;
  }
};

const OrganizationModal = ({
  showModal,
  handleClose,
}: OrganizationModalProps) => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const handleCloseAndResetStep = () => {
    setStep(1);
    handleClose();
  };

  const [paymentMethod, setPaymentMethod] = useState("card");

  return (
    <Modal
      show={showModal}
      onHide={handleClose}
      dialogClassName={combineCSSClasses(
        "rounded-modal no-close-btn",
        style["modal-container"]
      )}
      data-testid="org-modal"
    >
      <Modal.Header closeButton className={style["modal-header"]}>
        <div
          className={combineCSSClasses(style["full-width"])}
          data-testid="organization-modal"
        >
          <Modal.Title
            className={combineCSSClasses(
              "text-primary mt-3 mb-1",
              style["modal-title"]
            )}
          >
            {[1, 4].includes(step) ? (
              <></>
            ) : (
              <button
                className={combineCSSClasses("btn py-0", style["prev-btn"])}
                onClick={handlePrev}
              >
                <svg
                  width="7"
                  height="10"
                  viewBox="0 0 7 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.06066 8.93934L2.12128 4.99997L6.06066 1.06056L5 0L0 4.99997L5 10L6.06066 8.93934Z"
                    fill="#027b77"
                  />
                </svg>
              </button>
            )}
            {i18n._(/*i18n*/ "New organization")}
          </Modal.Title>
          <ProgressBar
            now={25 * step}
            data-testid="progress-bar"
            className={combineCSSClasses("mt-4", style["progress-bar"])}
          />
        </div>
      </Modal.Header>
      <Modal.Body className={style["modal-body"]}>
        <datalist id="regions">
          {US_STATES_AND_CANADIAN_TERRITORIES.map((state: string) => (
            <option value={state} key={`state-${state}`} />
          ))}
        </datalist>
        <div className={step != 1 ? "d-none" : ""}>
          <NewOrganizationInputStep1 />
        </div>
        <div className={step != 2 ? "d-none" : ""}>
          <NewOrganizationInputStep2 />
        </div>
        <div className={step != 3 ? "d-none" : ""}>
          <NewOrganizationInputStep3
            paymentMethod={paymentMethod}
            setPaymentMethod={setPaymentMethod}
          />
        </div>
        <div className={step != 4 ? "d-none" : ""}>
          <NewOrganizationInputStep4 paymentMethod={paymentMethod} />
        </div>
      </Modal.Body>
      <Modal.Footer className={style["modal-footer"]}>
        <div
          data-testid="step-button"
          className={combineCSSClasses(
            `d-flex ${
              step == 4 ? "justify-content-center" : "justify-content-between"
            } w-100`,
            style["mt-16px"],
            style["mb-24px"]
          )}
        >
          {step == 4 ? (
            <></>
          ) : (
            <button
              className={combineCSSClasses("btn", style["grey-btn"])}
              onClick={handleCloseAndResetStep}
              data-testid="cancel-btn"
            >
              {i18n._(/*i18n*/ "CANCEL")}
            </button>
          )}

          <div>
            {step == 2 ? (
              <button
                className={combineCSSClasses(
                  "btn",
                  style["grey-btn"],
                  style["mr-8px"]
                )}
              >
                {i18n._(/*i18n*/ "SKIP THIS STEP")}
              </button>
            ) : (
              <></>
            )}
            {step == 4 ? (
              <button
                className={combineCSSClasses(
                  "btn",
                  style["grey-btn"],
                  style["mr-8px"]
                )}
              >
                {i18n._(/*i18n*/ "EMAIL ORGANIZATION")}
              </button>
            ) : (
              <></>
            )}

            {step == 4 ? (
              <button
                className="btn btn-primary"
                onClick={handleCloseAndResetStep}
              >
                {i18n._(/*i18n*/ "CLOSE")}
              </button>
            ) : (
              <button className="btn btn-primary" onClick={handleNext}>
                {i18n._(/*i18n*/ "NEXT")}
              </button>
            )}
          </div>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default OrganizationModal;
