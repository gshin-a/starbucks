export interface UtilNavProps {
  showSearch: boolean;
}

export interface SearchBtnProps {
  showSearch: boolean;
  setShowSearch: React.Dispatch<React.SetStateAction<boolean>>;
}

interface GnbSubItem {
  id: number;
  name: string;
  link: string;
}

export interface GnbSubItemProps {
  gnbsubitemList: GnbSubItem[];
  isLast: boolean;
}

interface GnbSub {
  id: number;
  name: string;
  link: string;
  w: string;
  eng: string;
}

export interface GnbSubProps {
  gnbsubList: GnbSub[];
}
