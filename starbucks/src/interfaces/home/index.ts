// MainPromBnr

export interface ControllerButtonProps {
  buttonState: number;
  curbuttonNum: number;
  clickControlButton: (nextItem: number) => void;
  isDisabled: boolean;
}

export interface BnrSlideItemProps {
  setMouseOver: React.Dispatch<React.SetStateAction<boolean>>;
  curItem: number;
  idx: number;
}

export interface ControllerProps {
  stopSlide: boolean;
  setStopSlide: React.Dispatch<React.SetStateAction<boolean>>;
  buttonState: number;
  clickControlButton: (nextItem: number) => void;
  isDisabled: boolean;
}

export interface MakeSrcIdxProps {
  idx: number;
  curItem: number;
}

export interface BnrSlideProps {
  curItem: number;
  slidingState: string;
  setMouseOver: React.Dispatch<React.SetStateAction<boolean>>;
}
