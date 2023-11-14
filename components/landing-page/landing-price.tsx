"use client";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { ArrowRight, Check, HelpCircle, Minus } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { UpgradeButton } from "./upgrade-button";
import FaqSection from "./faq";

export default function LandingPricing() {
  const { isSignedIn } = useAuth();
  const PLANS = [
    {
      name: "Free",
      slug: "free",
      quota: 10,
      price: {
        amount: 0,
        priceIds: {
          test: "",
          production: "",
        },
      },
    },
    {
      name: "Pro",
      slug: "pro",
      quota: 50,
      price: {
        amount: 250,
        priceIds: {
          test: "",
          production: "",
        },
      },
    },
  ];
  interface PricingFeature {
    text: string;
    footnote?: string;
    negative?: boolean;
  }

  interface PricingItem {
    plan: string;
    tagline: string;
    quota: number | string;
    features: PricingFeature[];
  }
  const pricingItems: PricingItem[] = [
    {
      plan: "Free",
      tagline:
        "Explore essential features at no cost, perfect for individuals and small projects.",
      quota: 10,
      features: [
        {
          text: "10 Generations across platform",
          footnote: "The maximum amount response you can get",
        },
        {
          text: "Max 10 Sec Processing",
          footnote: "The maximum time your prompt will process",
        },
        {
          text: "Mobile-friendly interface",
        },
        {
          text: "Higher-quality responses",
          footnote: "Better algorithmic responses for enhanced content quality",
          negative: true,
        },
        {
          text: "Priority support",
          negative: true,
        },
      ],
    },
    {
      plan: "Pro",
      tagline:
        "Unlock advanced capabilities and premium support for enthusiasts and professionals.",
      quota: "Unlimited",
      features: [
        {
          text: "Unlimited generations across platform",
          footnote: "The maximum amount of response you can get.",
        },
        {
          text: "Unlimted Processing Time",
          footnote: "The maximum time your prompt will process",
        },
        {
          text: "Mobile-friendly interface",
        },
        {
          text: "Higher-quality responses",
          footnote: "Better algorithmic responses for enhanced content quality",
        },
        {
          text: "Priority support",
        },
      ],
    },
  ];

  return (
    <div className="mx-auto w-full px-2.5 md:px-20 mb-8 mt-5 text-center max-w-5xl">
      <div className="mx-auto mb-10 sm:max-w-lg">
        <h1 className="text-6xl font-bold sm:text-7xl text-white">Pricing</h1>
        <p className="mt-5 text-gray-600 sm:text-lg">
          Whether you&apos;re just trying out our service or need more,
          we&apos;ve got you covered.
        </p>
      </div>
      <div className="pt-12 grid grid-cols-1 gap-10 lg:grid-cols-2">
        <TooltipProvider>
          {pricingItems.map(({ plan, tagline, quota, features }) => {
            const price =
              PLANS.find((p) => p.slug === plan.toLowerCase())?.price.amount ||
              0;
            return (
              <div
                key={plan}
                className={cn("relative rounded-2xl bg-muted shadow-lg", {
                  "border-2 border-pink-600 shadow-purple-400": plan === "Pro",
                  "border border-gray-200": plan !== "Pro",
                })}
              >
                {plan === "Pro" && (
                  <div className="absolute -top-5 left-0 right-0 mx-auto w-32 rounded-full bg-gradient-to-r from-purple-400 to-pink-600 px-3 py-2 text-sm font-medium text-white">
                    Upgrade now
                  </div>
                )}
                <div className="p-5">
                  <h3 className="my-3 text-black text-center font-display text-3xl font-bold">
                    {plan}
                  </h3>
                  <p className="text-gray-500">{tagline}</p>
                  <p className="my-5 font-display text-black text-6xl font-semibold">
                    ₹{price}
                  </p>
                  <p className="text-gray-500">per month</p>
                </div>

                <div className="flex h-20 items-center justify-center border-b border-t border-gray-200 bg-gray-50">
                  <div className="flex items-center space-x-1">
                    <p>{quota.toLocaleString()} Generations included</p>
                    <Tooltip delayDuration={300}>
                      <TooltipTrigger className="cursor-default ml-1.5">
                        <HelpCircle className="h-4 w-4 text-zinc-500" />
                      </TooltipTrigger>
                      <TooltipContent className="w-80 p-2">
                        How many prompts can you use
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </div>
                <ul className="my-10 space-y-5 px-8">
                  {features.map(({ text, footnote, negative }) => (
                    <li key={text} className="flex space-x-5">
                      <div className="flex-shrink-0">
                        {negative ? (
                          <Minus className="h-6 w-6 text-gray-300" />
                        ) : (
                          <Check className="h-6 w-6 text-pink-500" />
                        )}
                      </div>
                      {footnote ? (
                        <div className="flex items-center space-x-1">
                          <p
                            className={cn("text-gray-600", {
                              "text-gray-400": negative,
                            })}
                          >
                            {text}
                          </p>
                          <Tooltip delayDuration={300}>
                            <TooltipTrigger className="cursor-default ml-1.5">
                              <HelpCircle className="h-4 w-4 text-zinc-500" />
                            </TooltipTrigger>
                            <TooltipContent className="w-80 p-2">
                              {footnote}
                            </TooltipContent>
                          </Tooltip>
                        </div>
                      ) : (
                        <p
                          className={cn("text-gray-600", {
                            "text-gray-400": negative,
                          })}
                        >
                          {text}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
                <div className="border-t border-gray-200" />
                <div className="p-5">
                  {plan === "Free" ? (
                    <Link
                      href={isSignedIn ? "/settings" : "/sign-in"}
                      className={buttonVariants({
                        className: "w-full",
                        variant: "secondary",
                      })}
                    >
                      {isSignedIn ? "Upgrade now" : "Sign up"}
                      <ArrowRight className="h-5 w-5 ml-1.5" />
                    </Link>
                  ) : isSignedIn ? (
                    <UpgradeButton />
                  ) : (
                    <Link
                      href="/sign-in"
                      className={buttonVariants({
                        className: "w-full",
                      })}
                    >
                      {isSignedIn ? "Upgrade now" : "Sign up"}
                      <ArrowRight className="h-5 w-5 ml-1.5" />
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </TooltipProvider>
      </div>
      <FaqSection />
    </div>
  );
}
