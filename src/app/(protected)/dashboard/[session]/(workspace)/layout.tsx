import Navbar from "@/components/navbar";
import { SubscriptionEntitlementQuery } from "@/convex/query.config";
import { combinedSlug } from "@/lib/utils";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
  children: React.ReactNode;
  params: { session: string };
};

export default async function Layout({ children, params }: Props) {
  const { entitlement, profileName } = await SubscriptionEntitlementQuery();

  const target = combinedSlug(profileName ?? "");

  if (entitlement?._valueJSON && target && params.session !== target) {
    redirect(`/dashboard/${target}`);
  }

  return (
    <div className="grid grid-cols-1">
      <Navbar />
      {children}
    </div>
  );
}
