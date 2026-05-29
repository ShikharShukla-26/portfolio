import type { IconType } from "react-icons";
import { FaLinkedin } from "react-icons/fa6";
import { SiGithub, SiGmail, SiLinktree, SiSubstack, SiX } from "react-icons/si";

export type SocialPlatform = "linkedin" | "github" | "x" | "substack" | "email" | "fallback";

type PlatformConfig = {
  Icon: IconType;
  color: string;
};

const PLATFORM_CONFIG: Record<SocialPlatform, PlatformConfig> = {
  linkedin: { Icon: FaLinkedin, color: "#0A66C2" },
  github: { Icon: SiGithub, color: "#f0f6fc" },
  x: { Icon: SiX, color: "#ffffff" },
  substack: { Icon: SiSubstack, color: "#FF6719" },
  email: { Icon: SiGmail, color: "#EA4335" },
  fallback: { Icon: SiLinktree, color: "currentColor" },
};

export function getSocialPlatform(label: string, url: string): SocialPlatform {
  const normalizedLabel = label.toLowerCase();
  const normalizedUrl = url.toLowerCase();

  if (normalizedLabel.includes("linkedin") || normalizedUrl.includes("linkedin.com")) {
    return "linkedin";
  }
  if (normalizedLabel.includes("github") || normalizedUrl.includes("github.com")) {
    return "github";
  }
  if (
    normalizedLabel.includes("twitter") ||
    normalizedLabel === "x" ||
    normalizedUrl.includes("x.com") ||
    normalizedUrl.includes("twitter.com")
  ) {
    return "x";
  }
  if (normalizedLabel.includes("substack") || normalizedUrl.includes("substack.com")) {
    return "substack";
  }
  if (normalizedLabel.includes("email") || normalizedUrl.startsWith("mailto:")) {
    return "email";
  }

  return "fallback";
}

type SocialBrandIconProps = {
  label: string;
  url: string;
  size?: number;
  className?: string;
};

export function SocialBrandIcon({ label, url, size = 20, className }: SocialBrandIconProps) {
  const platform = getSocialPlatform(label, url);
  const { Icon, color } = PLATFORM_CONFIG[platform];

  return (
    <Icon
      aria-hidden
      className={className}
      size={size}
      style={{ color }}
    />
  );
}
