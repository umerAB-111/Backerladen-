const basePath = "/Backerladen-";

export default function Img({
  src,
  alt,
  className,
  fill,
}: {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
}) {
  return (
    <img
      src={`${basePath}${src}`}
      alt={alt}
      className={className}
      style={fill ? { position: "absolute", height: "100%", width: "100%", left: 0, top: 0, right: 0, bottom: 0, objectFit: "cover" } : undefined}
      loading="lazy"
    />
  );
}
