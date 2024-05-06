"use client";

import { generateShortNumericUUID } from "@/utils/generateShortNumericUUID";
import React, { FormEvent } from "react";
import { useAssetsContext } from "@/context/AssetsContext";
import { AssetType } from "@/Data/defs";
import { Input } from "@/components/ui/Input";

function AddAssetForm() {
  const { addAsset } = useAssetsContext();
  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const name = "Asset Random";
    const id = generateShortNumericUUID();
    const type = AssetType.E;
    const parent = null;

    addAsset({ name, id, type, parent });
  };
  return (
    <>
      <form onSubmit={handleSubmitForm} noValidate>
        <Input label="Assets name" />
      </form>
    </>
  );
}

export { AddAssetForm };
