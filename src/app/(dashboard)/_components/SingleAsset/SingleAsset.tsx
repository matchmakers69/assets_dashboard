"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { SingleAssetProps } from "./defs";
import { AssetLevel1 } from "./AssetLevel1";
import { AttributeLevel1 } from "./AttributeLevel1";
import { AssetCta } from "./AssetCta";

export function SingleAsset({ asset }: SingleAssetProps) {
  const [isInView, setIsInView] = useState(false);

  const handleToggleContentInView = () => {
    setIsInView((prevState) => !prevState);
  }
  return (
    <div className="space-y-8 sm:space-y-10 md:space-y-16">
      <div className="flex items-center gap-8">
        <AssetCta asset={asset}>
          <h2 className="text-[2.2rem] text-text-light font-bold leading-[1.6]">
            {asset.name}
          </h2>
        </AssetCta>

        <button onClick={handleToggleContentInView} type="button" className="block sm:hidden">
          {!isInView ? <FaChevronDown /> : <FaChevronUp />}
        </button>
      </div>
      
     
      <div className={`hidden sm:block ${isInView ? "!block" : "hidden"}`}>
         <div className="sm:ml-10 space-y-16">
          {asset.children && Array.isArray(asset.children)
            ? asset.children.map((child) => (
                <AssetLevel1 key={child.id} asset={child} />
              ))
            : null}
        </div>
        <div className="sm:ml-10 space-y-3">
          {asset.attributes &&
            asset.attributes.length > 0 &&
            asset.attributes.map((attr) => {
              return (
                <AttributeLevel1
                  key={attr.key}
                  attribute={attr}
                ></AttributeLevel1>
              );
            })}
        </div>
      </div>
    </div>
  );
}
