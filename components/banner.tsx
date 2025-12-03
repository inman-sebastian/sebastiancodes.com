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
          className="size-full object-cover contrast-90 pointer-events-none"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/me_trimmed_loop.mp4" type="video/mp4" />
        </video>
      )}
      {type === "image" && (
        <img
          src="/me.jpeg"
          alt="Sebastian Inman"
          className="size-full object-cover contrast-90 dark:contrast-110"
        />
      )}
    </div>
  );
}
