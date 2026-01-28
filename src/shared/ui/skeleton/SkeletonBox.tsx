type Props = {
  className?: string;
};

const SkeletonBox = ({ className = "" }: Props) => (
  <div
    className={`animate-pulse rounded-lg bg-neutral-white/10 ${className} `}
  />
);

export default SkeletonBox;
