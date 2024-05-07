"use client";

import { generateShortNumericUUID } from "@/utils/generateShortNumericUUID";
import React, { FormEvent } from "react";
import { useAssetsContext } from "@/context/AssetsContext";
import { AssetType } from "@/Data/defs";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { getAllIds } from "@/app/(dashboard)/service/getAllIds";
import { FilterTypeSelect } from "../../FilterTypeSelect";

function AddAssetForm() {
  const {
    addAsset,
    selectedAssetType,
    handleSelectAssetTypeChange,
    handleSetAssetIdChange,
    assetId,
    assets,
    newAssetTextInputValues,
    handleSetTextValuesAssetChange,
    handleCloseModal,
  } = useAssetsContext();

  const assetIds = getAllIds(assets);

  // Please be aware in the real scenario that would be async operation
  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newAsset = {
      id: generateShortNumericUUID(),
      name: newAssetTextInputValues.name,
      description: newAssetTextInputValues.description,
      type: selectedAssetType || AssetType.A, // Double check this
      parent: Number(assetId) || null,
    };
    console.log(newAsset);
    addAsset(newAsset);
    handleCloseModal();
  };
  return (
    <>
      <form className="p-6" onSubmit={handleSubmitForm} noValidate>
        <div className="mb-6">
          <FilterTypeSelect
            onChange={handleSetAssetIdChange}
            value={assetId}
            id="parent"
            defaultValue="Top level"
            label="Select parent ID for level"
            options={assetIds}
          />
        </div>
        <div className="mb-6">
          <FilterTypeSelect
            onChange={handleSelectAssetTypeChange}
            value={selectedAssetType || ""}
            id="assetType"
            defaultValue="Asset type"
            label="Select asset type"
            options={Object.values(AssetType)}
          />
        </div>
        <div className="mb-6">
          <Input
            onChange={handleSetTextValuesAssetChange}
            value={newAssetTextInputValues.name}
            name="name"
            placeholder="Asset name"
            label="Assets name"
          />
        </div>

        <div className="mb-6">
          <Input
            onChange={handleSetTextValuesAssetChange}
            value={newAssetTextInputValues.description}
            name="description"
            label="Description"
            placeholder="Asset description"
          />
        </div>

        <div className="mb-6">
          <Button
            label="Create asset"
            type="submit"
            className="bg-pink hover:bg-light-pink"
          />
        </div>
      </form>
    </>
  );
}

export { AddAssetForm };
