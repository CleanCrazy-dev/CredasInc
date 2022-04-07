const getLocaleCode = (locale?: string): string => {
  switch (locale) {
    case "es":
      return "es-ES";
      break;
    case "fr":
      return "fr-FR";
      break;
    default:
      return "en-US";
  }
};

export const formatMoney = (price: number, noDecimal?: boolean) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    ...(noDecimal ? { maximumFractionDigits: 0 } : {}),
  }).format(price);
};
