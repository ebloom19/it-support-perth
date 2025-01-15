"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import formbricks from "@formbricks/js";

export const FormbricksProvider = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const environmentId = process.env.NEXT_PUBLIC_FORMBRICKS_ENVIRONMENT_ID!;
  const apiHost = process.env.NEXT_PUBLIC_FORMBRICKS_API_HOST!;

  useEffect(() => {
    formbricks.init({
      environmentId,
      apiHost,
    });
  }, [apiHost, environmentId]);

  useEffect(() => {
    formbricks?.registerRouteChange();
  }, [pathname, searchParams]);

  return null;
};
