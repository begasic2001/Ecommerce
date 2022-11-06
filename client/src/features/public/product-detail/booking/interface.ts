export interface IImgGallerySelect {
  id: string;
  url: string;
}

export interface IArrGalleryProps {
  arrGallery: IImgGallerySelect[];
}

export interface IGalleryPartProps {
  arrGallery: IImgGallerySelect[];
  imgGallerySelect: IImgGallerySelect;
  handleGallerySelect: (id: string) => void;
}

export interface ISummaryPartProps {
  maxQuantity: number;
  quantity: number;
  handleQuantityBtn: (action: string) => void;
  handleQuantityCurrent: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ISBooking {
  booking: string;
  bookingRow: string;
}

export interface ISGallery {
  gallery: string;
  galleryList: string;
  galleryListItem: string;
  galleryListItemSelected: string;
  galleryListImg: string;
  gallerySpec: string;
  gallerySpecImg: string;
}

export interface ISSummary {
  summary: string;
  summaryTitle: string;
  summaryConfirm: string;
  table: string;
  tableCode: string;
  tablePrice: string;
  tablePriceOld: string;
  tableQuantity: string;
  tableQuantityBox: string;
  tableQuantityBtn: string;
  tableQuantityRemain: string;
  tableQuantityInput: string;
}
