import { sanityWriteClient } from "../client";

export type AnalyticsEventType = "preview" | "download";

export const trackPublicationEvent = async ({
  publicationId,
  publicationType,
  eventType,
}: {
  publicationId: string;
  publicationType: "case-study" | "white-paper";
  eventType: AnalyticsEventType;
}) => {
  try {
    await sanityWriteClient.create({
      _type: "analyticsEvent",
      eventType,
      publicationType,
      publication: {
        _type: "reference",
        _ref: publicationId,
      },
      timestamp: new Date().toISOString(),
    });
  } catch (err) {
    // ❗ analytics should NEVER break UX
    console.error("Analytics tracking failed", err);
  }
};
