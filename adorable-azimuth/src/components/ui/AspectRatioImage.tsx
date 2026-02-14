import type { JSX } from "preact/jsx-runtime";
import { AspectRatio } from "@/components/ui/aspect-ratio";

type Props = {
  src: string;
  alt: string;
  ratio?: number;
  loading?: "eager" | "lazy";
  decoding?: "async" | "sync" | "auto";
  class?: string;
  className?: string;
  imgClass?: string;
  imgClassName?: string;
} & Omit<JSX.HTMLAttributes<HTMLDivElement>, "children">;

export function AspectRatioImage({
  src,
  alt,
  ratio = 16 / 9,
  loading = "lazy",
  decoding = "async",
  class: classAttr,
  className,
  imgClass,
  imgClassName,
  style,
  ...props
}: Props) {
  const containerClass = classAttr ?? className;
  const imageClass = imgClass ?? imgClassName;

  return (
    <AspectRatio
      ratio={ratio}
      class={containerClass}
      style={{
        borderRadius: "var(--radius-sm)",
        background: "rgba(255, 255, 255, 0.06)",
        overflow: "hidden",
        ...style
      }}
      {...props}
    >
      <img
        src={src}
        alt={alt}
        loading={loading}
        decoding={decoding}
        class={imageClass}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover"
        }}
      />
    </AspectRatio>
  );
}

