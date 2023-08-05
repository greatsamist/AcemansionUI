interface ArrowRightDownIconProps {
  className?: string;
  width?: string;
  height?: string;
  fill?: string;
}

const ArrowRightDownIcon = ({
  className = "fill-ace-black",
  width = "35px",
  height = "35px",
  fill,
}: ArrowRightDownIconProps) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.34319 6.34313C6.73371 5.9526 7.36688 5.9526 7.7574 6.34313L15.9645 14.5502V8.44973C15.9645 7.89744 16.4122 7.44973 16.9645 7.44973C17.5168 7.44973 17.9645 7.89744 17.9645 8.44973V16.9497C17.9645 17.502 17.5168 17.9497 16.9645 17.9497H16.9505C16.95 17.9497 16.9496 17.9497 16.9491 17.9497H8.46451C7.91222 17.9497 7.46451 17.502 7.46451 16.9497C7.46451 16.3974 7.91222 15.9497 8.46451 15.9497H14.5356L6.34319 7.75734C5.95266 7.36681 5.95266 6.73365 6.34319 6.34313Z"
        fill={fill}
      />
    </svg>
  );
};

export default ArrowRightDownIcon;
