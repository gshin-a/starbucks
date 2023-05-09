export interface BnrSlideProps {
  curItem: number;
  slidingState: string;
  setMouseOver: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ControllerProps {
  stopSlide: boolean;
  setStopSlide: React.Dispatch<React.SetStateAction<boolean>>;
  buttonState: number;
  clickControlButton: (nextItem: number) => void;
  isDisabled: boolean;
}

export interface MainPromBnrProps {
  animateCloseBnr: boolean;
}

export interface MakeSrcIdxProps {
  idx: number;
  curItem: number;
}

export interface BnrSlideItemProps {
  setMouseOver: React.Dispatch<React.SetStateAction<boolean>>;
  curItem: number;
  idx: number;
}

// NoticeLine

export interface NoticeLineProps {
  openBnr: boolean;
  setOpenBnr: React.Dispatch<React.SetStateAction<boolean>>;
  closeBnr: () => void;
}
