"use client";


import { SingleAsset } from "../SingleAsset";
import { AddAsset } from "../AddAsset";
import { Modal } from "@/components/ui/Modal";
import { AddAssetForm } from "../AddAsset/AddAssetForm";
import { AssetFilters } from "../AssetFilters";
import { useAppContext } from "@/context/AppContext/AppContext";
import { useAssetsContext } from "@/context/AssetsContext";

export function MainAssetsList() {
  const { assets, loading } = useAssetsContext();

  const { isModalInView, handleCloseModal } = useAppContext();

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
        isOpen={isModalInView}
        title="Add new asset"
        onClose={handleCloseModal}
      >
        <AddAssetForm />
      </Modal>
    </>
  );
}
