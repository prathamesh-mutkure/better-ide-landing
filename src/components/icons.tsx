import {
  AlertTriangle,
  ArrowRight,
  ArrowDown,
  Check,
  ChevronLeft,
  ChevronRight,
  Command,
  CreditCard,
  File,
  FileText,
  HelpCircle,
  Image,
  Laptop,
  LayoutDashboard,
  Loader2,
  Moon,
  MoreVertical,
  Package,
  Pizza,
  Plus,
  Settings,
  SunMedium,
  Trash,
  Twitter,
  User,
  Users,
  X,
  Edit,
  UserPlus,
  PlusCircle,
  Info,
  Calendar,
  Home,
  ChevronsUpDown,
  FileIcon,
  FileImage,
  ArrowLeft,
  LucideLockKeyhole,
  StampIcon,
  Code,
  Cloud,
  Bug,
  IterationCw,
  Mail,
  Youtube,
  ArrowUpRight,
  type XIcon as LucideIcon,
  LucideProps,
} from "lucide-react";

export type Icon = typeof LucideIcon;

export const Icons = {
  stamp: StampIcon,
  logo: Command,
  close: X,
  spinner: Loader2,
  calendar: Calendar,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  trash: Trash,
  post: FileText,
  page: File,
  media: Image,
  settings: Settings,
  billing: CreditCard,
  ellipsis: MoreVertical,
  add: Plus,
  warning: AlertTriangle,
  user: User,
  arrowRight: ArrowRight,
  help: HelpCircle,
  pizza: Pizza,
  sun: SunMedium,
  moon: Moon,
  laptop: Laptop,
  package: Package,
  dashboard: LayoutDashboard,
  edit: Edit,
  userPlus: UserPlus,
  plusCircle: PlusCircle,
  info: Info,
  home: Home,
  fileIcon: FileIcon,
  fileTextIcon: FileIcon,
  fileImage: FileImage,
  chevronsUpDown: ChevronsUpDown,
  arrowLeft: ArrowLeft,
  lock: LucideLockKeyhole,
  twitterOld: Twitter,
  check: Check,
  users: Users,
  code: Code,
  deploy: Cloud,
  test: Bug,
  iterate: IterationCw,
  arrowDown: ArrowDown,
  youtube: Youtube,
  mail: Mail,

  arrowLink: ArrowUpRight,

  discord: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 127.14 96.36"
      width="24"
      height="24"
      fill="currentColor"
      {...props}
    >
      <path
        fill="#fff"
        d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"
      />
    </svg>
  ),

  github: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  ),

  actionButton: (props: LucideProps) => (
    <svg
      width="31"
      height="30"
      viewBox="0 0 31 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.39196 24.4975C2.43719 23.392 1.67085 22.1608 1.09296 20.804C0.515075 19.4472 0.150754 18.0151 0 16.5075H3.09045C3.24121 17.6131 3.51759 18.6621 3.9196 19.6545C4.32161 20.647 4.84925 21.5578 5.50251 22.3869L3.39196 24.4975ZM0 13.4925C0.201005 11.9849 0.577889 10.5528 1.13065 9.19598C1.68342 7.8392 2.43719 6.60804 3.39196 5.50251L5.50251 7.61307C4.84925 8.44221 4.32161 9.35302 3.9196 10.3455C3.51759 11.3379 3.24121 12.3869 3.09045 13.4925H0ZM13.4925 30C11.9849 29.8492 10.559 29.4849 9.21482 28.907C7.8706 28.3291 6.63317 27.5879 5.50251 26.6834L7.61307 24.4975C8.49246 25.1508 9.41583 25.691 10.3832 26.1181C11.3505 26.5452 12.3869 26.8342 13.4925 26.9849V30ZM7.68844 5.50251L5.50251 3.31658C6.63317 2.41206 7.8706 1.67085 9.21482 1.09296C10.559 0.515075 12.0101 0.150754 13.5678 0V3.01508C12.4372 3.16583 11.3819 3.45477 10.402 3.88191C9.42211 4.30905 8.51759 4.84925 7.68844 5.50251ZM11.3065 21.7839V8.21608L21.8593 15L11.3065 21.7839ZM16.5829 30V26.9849C19.6231 26.5578 22.142 25.2136 24.1394 22.9523C26.1369 20.691 27.1357 18.0402 27.1357 15C27.1357 11.9598 26.1369 9.30905 24.1394 7.04774C22.142 4.78643 19.6231 3.44221 16.5829 3.01508V0C20.4523 0.427136 23.6809 2.0603 26.2688 4.8995C28.8568 7.73869 30.1508 11.1055 30.1508 15C30.1508 18.8945 28.8568 22.2613 26.2688 25.1005C23.6809 27.9397 20.4523 29.5729 16.5829 30Z"
        fill="#111111"
      />
    </svg>
  ),

  twitter: (props: LucideProps) => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 300 300"
      fill="white"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66" />
    </svg>
  ),
};
