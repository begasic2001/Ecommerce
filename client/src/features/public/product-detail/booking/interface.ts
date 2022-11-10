export interface IImgGallerySelect {
  id: string;
  url: string;
}

export interface IArrGalleryProps {
  arrGallery: IImgGallerySelect[];
}

export interface IGalleryPartProps {
  arrGallery: IImgGallerySelect[];
  imgGallerySelect: number;
  handleGallerySelect: (num: number) => void;
}

export interface ISummaryPartProps {
  maxQuantity: number;
  quantity: number;
  handleQuantityBtn: (action: string) => void;
  handleQuantityCurrent: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
