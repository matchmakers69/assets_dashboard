"use client";

import { Button } from "@/components/ui/Button";
import { useAssetsContext } from "@/context/AssetsContext";

export function AddAsset() {
  const { handleOpenModal } = useAssetsContext();

  const handleToggleShowForm = () => {
    handleOpenModal();
  };

  return (
    <div className="mb-6">
      <div className="mb-4">
        <Button
          onClick={handleToggleShowForm}
          label="Add new asset"
          className="px-6"
          type="button"
        />
      </div>
    </div>
  );
}
