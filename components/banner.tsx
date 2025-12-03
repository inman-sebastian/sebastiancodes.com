export type BannerProps = {
  type?: "image" | "video";
  desaturate?: boolean;
  className?: string;
};

export default function Banner({ type = "image", desaturate = false, className = "" }: BannerProps) {
  return (
    <div className={`overflow-hidden rounded-sm grid aspect-3/2 ${desaturate ? "saturate-0" : ""} ${className}`}>
      {type === "video" && (
        <video
          className="size-full object-cover contrast-90"
          autoPlay
          muted
          loop
          controls
          controlsList="nodownload nofullscreen noremoteplayback"
          playsInline
          disablePictureInPicture
          disableRemotePlayback
          preload="metadata"
          aria-description="Sebastian Inman working on his laptop, coding and typing rapidly."
        >
          <source src="/me_trimmed_loop.mp4" type="video/mp4" />
          <track src="/captions.vtt" kind="captions" srcLang="en" label="English" />
        </video>
      )}
      {type === "image" && (
        <img
          src="/me.jpeg"
          alt="Sebastian Inman working on his laptop, coding and typing rapidly."
          fetchPriority="high"
          className="size-full object-cover contrast-90 dark:contrast-110"
        />
      )}
    </div>
  );
}
