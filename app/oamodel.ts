export class Blog {
  url: string;
  rcPoints: number;
}
export class PointsValue {
  value: any;
  points: number;
}

export class OAModel {
  constructor(
    public stack: PointsValue,
    public msdn: PointsValue,
    public exchange: PointsValue,
    public rumvp: PointsValue,
    public blogs: Array<Blog>,

    public codechalrev: PointsValue,
    public chalmaker: PointsValue,
    public refhired: PointsValue,

    public rumentor: PointsValue,
    public runewsletter: PointsValue,
    public ruchaircom: PointsValue,
    public rufoodcom: PointsValue,
    public rucodecamp: PointsValue,
    public rutrainingbrown: PointsValue,
    public ruparttrainbrown: PointsValue,
    public rupug: PointsValue,
    public ruteched: PointsValue,
    public rucollegework: PointsValue,
    public rupresales: PointsValue,
    public othercontrib: PointsValue
    ) { }
}