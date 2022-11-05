interface IOtherSale {
  mobTabMedia: boolean;
  mobMedia: boolean;
}

export interface IOtherSaleProps {
  media: IOtherSale;
}

export interface ISHotSale {
  hot: string;
  hotTitle: string;
  hotContent: string;
}

export interface ISBigSale {
  big: string;
  bigImage: string;
  bigInfo: string;
  bigInfoName: string;
  bigInfoPrice: string;
  bigRemain: string;
  bigRemainTxt: string;
  bigRemainTime: string;
}

export interface ISOtherSale {
  other: string;
}
