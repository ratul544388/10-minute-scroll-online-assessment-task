"use client";

import { Button } from "@/components/ui/button";
import { useQueryParams } from "@/hooks/use-query-params";
import { Language } from "@/types";

export const LanguageChangerButton = () => {
  const { searchParams, setQueryParams } = useQueryParams();
  const language = (searchParams.get("lang") as Language) || "en";

  const handleClick = () => {
    setQueryParams({
      query: { lang: language === "en" ? "bn" : "en" },
      scroll: false,
    });
  };

  return (
    <Button variant="outline" onClick={handleClick} size="sm">
      {language.toUpperCase()}
    </Button>
  );
};
