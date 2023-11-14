"use client";
import axios from "axios";
import { useState } from "react";
import { ArrowRight, Zap } from "lucide-react";
import { toast } from "react-hot-toast";
import { Button } from "@/components/ui/button";

export const UpgradeButton = () => {
  const [loading, setLoading] = useState(false);
  const onClick = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/stripe");
      window.location.href = response.data.url;
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  return (
    <Button
      variant="premium"
      className="w-full"
      disabled={loading}
      onClick={onClick}
    >
      Upgrade now <ArrowRight className="h-5 w-5 ml-1.5" />
    </Button>
  );
};
