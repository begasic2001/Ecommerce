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

export interface ISBooking {
  booking: string;
  container: string;
  row: string;
}

export interface ISGallery {
  gallery: string;
  galleryList: string;
  galleryListItem: string;
  galleryListItemSelected: string;
  gallerySpec: string;
}

export interface ISSummary {
  summary: string;
  table: string;
  tableCode: string;
  tablePrice: string;
  tableQuantity: string;
  tableQuantityBox: string;
  tableQuantityBtn: string;
}
