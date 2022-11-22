export interface IGalleryPartProps {
  imgGallerySelect: number;
  handleGallerySelect: (num: number) => void;
}

export interface ISummaryPartProps {
  maxQuantity: number;
  quantity: number;
  handleQuantityBtn: (action: string) => void;
  handleQuantityCurrent: (e: React.ChangeEvent<HTMLInputElement>) => void;
  addItemToCart: () => void;
}
