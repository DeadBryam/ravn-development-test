type RavnLogoProps = {
  className?: string;
};

function RavnLogo({ className }: RavnLogoProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40" className={className}>
      <path
        fill="#fff"
        d="M30.422 26.556c5.3-1.448 9.196-6.297 9.196-12.056 0-6.784-5.404-12.305-12.141-12.493V2H0l6.695 8.331h1.371v.002h19.115a4.166 4.166 0 01-.062 8.333H13.391L28.928 38h10.69l-9.196-11.444zM9 38a5.5 5.5 0 100-11 5.5 5.5 0 000 11z"
      ></path>
    </svg>
  );
}

export { RavnLogo };
