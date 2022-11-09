interface IOtherSale {
  mobTabMedia: boolean;
  mobMedia: boolean;
}

export interface IOtherSaleProps {
  media: IOtherSale;
}


// Styles CSS
export interface ISHotSale {
  hot: string;
  container: string;
  title: string;
  content: string;
}

export interface ISBigSale {
  big: string;
  bigImage: string;
  info: string;
  infoName: string;
  infoPrice: string;
  remain: string;
  remainTxt: string;
  remainTime: string;
}

export interface ISOtherSale {
  other: string;
}
