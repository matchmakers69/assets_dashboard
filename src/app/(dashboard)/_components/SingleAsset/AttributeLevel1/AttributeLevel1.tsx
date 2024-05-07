import { Attribute } from "@/Data/defs";

interface AttributeLevel1Props {
  attribute: Attribute;
}

function AttributeLevel1({ attribute }: AttributeLevel1Props) {
  return (
    <>
      <div className="flex items-center space-x-4">
        <div className="flex flex-col">
          <h3 className="text-[1.8rem] text-text-light font-bold leading-[1.6]">
            {attribute.key}
          </h3>
          {attribute.value && (
            <h3 className="text-[1.6rem] text-text-light font-semibold leading-[1.6]">
              {attribute.value}
            </h3>
            
          )}
        </div>
      </div>
    </>
  );
}

export { AttributeLevel1 };
