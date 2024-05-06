"use client";

import { MainAssetsList } from "./_components/MainAssetsList";
import { Title } from "@/components/ui/Title";
import { useAssetsContext } from "@/context/AssetsContext";

export default function HomePage() {
  return (
    <section className="text-text-light">
      <div className="container mx-auto">
        <Title title="Welcome to dashboard" />
        <MainAssetsList />
      </div>
    </section>
  );
}
