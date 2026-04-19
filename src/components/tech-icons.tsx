import type { IconBaseProps, IconType } from 'react-icons';

function getSize(size: IconBaseProps['size']) {
  return size ?? '1em';
}

export const ZustandIcon: IconType = ({ size, style, className, title, ...rest }) => {
  const resolvedSize = getSize(size);

  return (
    <svg
      viewBox="0 0 24 24"
      width={resolvedSize}
      height={resolvedSize}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      className={className}
      aria-label={title ?? 'Zustand'}
      role="img"
      {...rest}
    >
      <path
        d="M7.1 8.2 4.9 5.8A1.7 1.7 0 0 1 7.4 3.5l1.9 2.1M16.9 8.2l2.2-2.4a1.7 1.7 0 0 0-2.5-2.3l-1.9 2.1"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 20.2c5.1 0 8.8-3.6 8.8-7.7 0-3.6-2.8-6.4-6.4-6.4h-4.8c-3.6 0-6.4 2.8-6.4 6.4 0 4.1 3.7 7.7 8.8 7.7Z"
        fill="currentColor"
      />
      <circle cx="8.9" cy="11.6" r="1.1" fill="#0A0F1E" />
      <circle cx="15.1" cy="11.6" r="1.1" fill="#0A0F1E" />
      <path
        d="M9.2 15.2c.8 1 1.7 1.5 2.8 1.5s2-.5 2.8-1.5"
        stroke="#0A0F1E"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M11.2 13.7 12 12.9l.8.8"
        stroke="#0A0F1E"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const TanstackIcon: IconType = ({ size, style, className, title, ...rest }) => {
  const resolvedSize = getSize(size);

  return (
    <svg
      viewBox="0 0 24 24"
      width={resolvedSize}
      height={resolvedSize}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      className={className}
      aria-label={title ?? 'TanStack'}
      role="img"
      {...rest}
    >
      <path
        d="M6.2 6.8c1.3-1.5 3-2.3 5.1-2.3 2.6 0 4.7 1 6.5 3"
        stroke="#FF5B45"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="M17.8 17.2c-1.3 1.5-3 2.3-5.1 2.3-2.6 0-4.7-1-6.5-3"
        stroke="#FF4154"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="M8.1 11.2h7.8"
        stroke="#FF7A59"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
};
