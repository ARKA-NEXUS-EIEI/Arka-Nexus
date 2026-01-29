import { tokens } from "../../../styles/tailwind.tokens";

interface IconProps {
  isVisible: boolean;
}

// VisionIcon: Handles the eye and target drawing animation
export const VisionIcon = ({ isVisible }: IconProps) => {
  const size = window.innerWidth > 480 ? "46" : "36";

  return (
    <div
      className={`duration-600 ease-custom flex-shrink-0 transition-all delay-300 ${
        isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
      }`}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        style={{ color: tokens.colors.brand["primary-blue"] }}
      >
        {/* Eye outline */}
        <path
          d="M10 50 C30 20, 70 20, 90 50 C70 80, 30 80, 10 50 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeDasharray="200"
          className="duration-1200 transition-[stroke-dashoffset] delay-500 ease-in-out"
          style={{ strokeDashoffset: isVisible ? "0" : "200" }}
        />
        {/* Pupil circle */}
        <circle
          cx="50"
          cy="50"
          r="15"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="94"
          className="delay-1000 duration-800 transition-[stroke-dashoffset] ease-in-out"
          style={{ strokeDashoffset: isVisible ? "0" : "94" }}
        />
        {/* Center dot */}
        <circle
          cx="50"
          cy="50"
          r="6"
          fill="currentColor"
          className={`delay-1500 duration-400 origin-center transition-all ease-in-out ${
            isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
        />
        {/* Target lines */}
        <line
          x1="35"
          y1="50"
          x2="25"
          y2="50"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className={`delay-1800 duration-400 transition-opacity ease-in-out ${isVisible ? "opacity-100" : "opacity-0"}`}
        />
        <line
          x1="75"
          y1="50"
          x2="65"
          y2="50"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className={`delay-1800 duration-400 transition-opacity ease-in-out ${isVisible ? "opacity-100" : "opacity-0"}`}
        />
        <line
          x1="50"
          y1="35"
          x2="50"
          y2="25"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className={`delay-1800 duration-400 transition-opacity ease-in-out ${isVisible ? "opacity-100" : "opacity-0"}`}
        />
        <line
          x1="50"
          y1="75"
          x2="50"
          y2="65"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className={`delay-1800 duration-400 transition-opacity ease-in-out ${isVisible ? "opacity-100" : "opacity-0"}`}
        />
      </svg>
    </div>
  );
};

// MissionIcon: Handles the rocket, fins, path, and stars animation
export const MissionIcon = ({ isVisible }: IconProps) => {
  const size = window.innerWidth > 480 ? "46" : "36";

  return (
    <div
      className={`duration-600 ease-custom flex-shrink-0 transition-all delay-300 ${
        isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
      }`}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        className="text-purple-500"
      >
        {/* Rocket body */}
        <path
          d="M45 75 L45 35 C45 25, 55 25, 55 35 L55 75 C55 80, 45 80, 45 75 Z"
          fill="currentColor"
          className={`delay-800 duration-600 transition-all ease-in-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
          }`}
        />
        {/* Rocket tip */}
        <path
          d="M45 35 C45 25, 50 15, 50 15 C50 15, 55 25, 55 35"
          fill="currentColor"
          className={`delay-1000 duration-400 origin-[50px_35px] transition-all ease-in-out ${
            isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
        />
        {/* Window */}
        <circle
          cx="50"
          cy="50"
          r="6"
          fill="white"
          className={`delay-1200 duration-400 transition-opacity ease-in-out ${isVisible ? "opacity-100" : "opacity-0"}`}
        />
        {/* Fins */}
        <path
          d="M45 70 L35 80 L40 75 Z"
          fill="currentColor"
          className={`delay-1100 duration-400 transition-opacity ease-in-out ${isVisible ? "opacity-80" : "opacity-0"}`}
        />
        <path
          d="M55 70 L65 80 L60 75 Z"
          fill="currentColor"
          className={`delay-1100 duration-400 transition-opacity ease-in-out ${isVisible ? "opacity-80" : "opacity-0"}`}
        />
        {/* Trajectory path */}
        <path
          d="M20 85 Q35 70, 50 75 Q65 80, 80 65"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="60"
          className="delay-1300 duration-1000 opacity-60 transition-[stroke-dashoffset] ease-in-out"
          style={{ strokeDashoffset: isVisible ? "0" : "60" }}
        />
        {/* Stars */}
        <polygon
          points="25,30 27,36 33,36 28,40 30,46 25,42 20,46 22,40 17,36 23,36"
          fill="currentColor"
          className={`delay-1500 duration-300 origin-[25px_38px] transition-all ease-in-out ${
            isVisible ? "scale-100 opacity-70" : "scale-0 opacity-0"
          }`}
        />
        <polygon
          points="75,25 76,29 80,29 77,32 78,36 75,34 72,36 73,32 70,29 74,29"
          fill="currentColor"
          className={`delay-1700 duration-300 origin-[75px_31px] transition-all ease-in-out ${
            isVisible ? "scale-100 opacity-70" : "scale-0 opacity-0"
          }`}
        />
      </svg>
    </div>
  );
};
