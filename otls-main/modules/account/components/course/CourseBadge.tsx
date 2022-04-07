import React from "react";
import Badge, { BagdeVariantType } from "@/components/Badge";

const badges: BagdeVariantType[] = ["success", "error", "warning", "info"];

const CourseBadge = () => {
  return (
    <div
      className="d-flex flex-wrap"
      style={{
        gap: "2rem",
      }}
    >
      {badges.map((item: BagdeVariantType, index) => (
        <Badge key={index} content={<span>Badge</span>} variant={item} />
      ))}
    </div>
  );
};

export default CourseBadge;
