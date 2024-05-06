"use client";

import { AssetType } from "@/Data/defs";
import { SingleAsset } from "../SingleAsset";
import { useAssetsContext } from "@/context/AssetsContext";
import { AddAsset } from "../AddAsset";
import { Modal } from "@/components/ui/Modal";
import { AddAssetForm } from "../AddAsset/AddAssetForm";
import { AssetFilters } from "../AssetFilters";

export function MainAssetsList() {
  const { assets, loading, isModalShown, handleCloseModal } =
    useAssetsContext();

  if (loading) return <div>Loading your assets be patient...</div>;

  return (
    <>
      <AddAsset />
      <AssetFilters />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3">
        {assets.map((asset) => (
          <SingleAsset key={asset.id} asset={asset} />
        ))}
      </div>

      <Modal
        isOpen={isModalShown}
        title="Add new asset"
        onClose={handleCloseModal}
      >
        <AddAssetForm />
      </Modal>
    </>
  );
}
