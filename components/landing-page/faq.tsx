"use client";
import styled from "styled-components";
import { media } from "@/lib/media";
import Accordion from "./accordion";

export default function FaqSection() {
  return (
    <Wrapper>
      <SectionTitle>Frequently asked question</SectionTitle>
      <Accordion title="How does the pricing work?">
        Currently there are 2 plans in CAVIC AI. In free tier you get 10
        generations limit across platform. If ou upgrade to pro tier you can
        generate unlimited response.
      </Accordion>
      <Accordion title="Is there a free trial available?">
        Yes, we offer a free tier where response is limited to 10. It&apos;s a
        great way to explore our platform and experience the features before
        committing to a subscription.
      </Accordion>
      <Accordion title="What happens if I exceed my plan's limits?">
        If you exceed your plan&apos;s limits, you&apos;ll be notified, and you
        can either upgrade your plan or pay for additional usage, depending our
        overage policy.
      </Accordion>
      <Accordion title="Can I change my plan at any time?">
        Absolutely! You have the flexibility to upgrade, downgrade, or switch
        plans at any time. Changes will take effect immediately, and billing
        will be adjusted accordingly.
      </Accordion>
      <Accordion title="Is there a refund policy?">
        No, currently we have a no refund policy. If you&apos;re not satisfied
        with our service, you can cancel the subscription at any time.
      </Accordion>
      <Accordion title="How do I cancel my subscription?">
        You can cancel your subscription at any time through your account
        settings. Once canceled, you&apos;ll have access to the service until
        the end of the billing period.
      </Accordion>
      <Accordion title="What payment methods do you accept?">
        We accept major credit cards, PayPal, and other secure payment methods.
        You can manage your payment details in your account settings.
      </Accordion>
      <Accordion title="Is my data secure?">
        Absolutely. We take security seriously and implement robust measures to
        ensure the confidentiality and integrity of your data. Learn more about
        our security practices.
      </Accordion>
      <Accordion title="Can I change my billing information?">
        Yes, you can update your billing information, including credit card
        details and billing address, in your account settings.
      </Accordion>
      <Accordion title="Do you offer custom plans for enterprise users?">
        Yes, we offer custom plans tailored to the specific needs of enterprise
        users. Contact our sales team to discuss your requirements.
      </Accordion>
      <Accordion title="How can I get technical support?">
        Our support team is available 24 hours a day, 7 days a week. You can
        reach us through email or live chat
      </Accordion>
      <Accordion title="What happens if there's a service outage or downtime?">
        In the rare event of a service outage, we&apos;re committed to keeping
        you informed and resolving the issue as quickly as possible. Check our
        status page for real-time updates.
      </Accordion>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 5rem;
  & > *:not(:first-child) {
    margin-top: 1rem;
  }
`;

const SectionTitle = styled.div`
  font-size: 5.2rem;
  font-weight: bold;
  line-height: 1.1;
  letter-spacing: -0.03em;
  text-align: center;
  color: white;

  ${media("<=tablet")} {
    font-size: 4.6rem;
  }
`;
