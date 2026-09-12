type IconProps = {
  classname: string
}

const MailIcon = ({ classname }: IconProps): JSX.Element => {
  return (
    <svg
      width="64"
      height="48"
      viewBox="0 0 64 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classname}
    >
      <path
        d="M59.5107 47.1885C58.4506 47.7072 57.2597 48 56 48H8C6.74477 48 5.55724 47.7105 4.5 47.1953L23.5176 28.5918L26.0586 31.4102C29.2358 34.934 34.7642 34.934 37.9414 31.4102L40.4814 28.5918L59.5107 47.1885ZM21.5068 26.3613L2.07324 45.373C0.785096 43.953 6.03193e-08 42.0683 0 40V8C1.78901e-07 6.46643 0.431458 5.03361 1.17969 3.81641L21.5068 26.3613ZM62.8193 3.81641C63.5677 5.03371 64 6.46625 64 8V40C64 42.063 63.2179 43.9425 61.9355 45.3613L42.4932 26.3604L62.8193 3.81641ZM56 0C57.7955 0 59.4531 0.591084 60.7881 1.58984L35.7139 29.4014C33.7281 31.6039 30.2719 31.6039 28.2861 29.4014L3.21094 1.58984C4.546 0.590801 6.20423 0 8 0H56Z"
        fill="currentColor"
      />
    </svg>
  )
}

const LinkedInLogo = ({ classname }: IconProps): JSX.Element => {
  return (
    <svg
      width="62"
      height="62"
      viewBox="0 0 62 62"
      xmlns="http://www.w3.org/2000/svg"
      className={classname}
    >
      <rect
        x="2.5"
        y="2.5"
        width="57"
        height="57"
        rx="4.5"
        stroke="currentColor"
        stroke-width="5"
      />
      <circle cx="15" cy="15" r="5" fill="currentColor" />
      <rect x="11" y="24" width="8" height="28" fill="currentColor" />
      <path
        d="M41.0859 23C46.5885 23 51.0759 27.4104 51.1709 32.9121L51.5 52H43V35C43 32.2386 40.7614 30 38 30C35.2386 30 33 32.2386 33 35V52H25V24H33V27.0566C34.839 24.5943 37.7763 23.0001 41.0859 23Z"
        fill="currentColor"
      />
    </svg>
  )
}

export { MailIcon, LinkedInLogo }
