"use client";

import { Button } from "@/components/ui/Button";
import { useAppContext } from "@/context/AppContext/AppContext";

export function AddAsset() {
  const { handleOpenModal } = useAppContext();

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
