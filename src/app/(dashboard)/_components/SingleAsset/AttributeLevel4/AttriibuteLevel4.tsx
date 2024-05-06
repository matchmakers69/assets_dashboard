import { Attribute } from "@/Data/defs";

interface AttributeLevel1Props {
  attribute: Attribute;
}

function AttriibuteLevel4({ attribute }: AttributeLevel1Props) {
  return (
    <>
      <div className="flex items-center space-x-4">
        <div className="flex flex-col justify-between">
          <h5 className="text-[1.4rem] text-text-light font-bold leading-[1.6]">
            {attribute.key}
          </h5>
          {attribute.value && (
            <h6 className="text-[1.2rem] text-text-light font-semibold leading-[1.6]">
              {attribute.value}
            </h6>
          )}
        </div>
      </div>
    </>
  );
}

export { AttriibuteLevel4 };
