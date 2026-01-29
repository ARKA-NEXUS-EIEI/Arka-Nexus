import { trackPublicationEvent } from "../../../core/services/sanity/analytics.service";

export const usePublicationAnalytics = () => {
  const trackPreview = (pub: any) =>
    trackPublicationEvent({
      publicationId: pub._id,
      publicationType: pub.type,
      eventType: "preview",
    });

  const trackDownload = (pub: any) =>
    trackPublicationEvent({
      publicationId: pub._id,
      publicationType: pub.type,
      eventType: "download",
    });

  return { trackPreview, trackDownload };
};
