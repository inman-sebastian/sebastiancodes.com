export type BannerProps = {
  type?: "image" | "video";
  desaturate?: boolean;
};

export default function Banner({ type = "image", desaturate = false }: BannerProps) {
  return (
    <div className={`overflow-hidden rounded-sm grid aspect-3/2 order-2 lg:order-1 lg:mb-6 ${desaturate ? "saturate-0" : ""}`}>
      {type === "video" && (
        <video
          className="size-full object-cover contrast-90 pointer-events-none"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/me.mp4" type="video/mp4" />
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
