export class CoverageOption {
  public name: string;
  public value: string;

  public constructor(init?: Partial<CoverageOption>) {
    Object.assign(this, init);
  }
}

export class CoverageLimit {
  public name: string = "";
  public title: string = "";
  public type: string = "";
  public options: CoverageOption[] = [];
  public optionChoice: number = 0;

  public constructor(init?: Partial<CoverageLimit>) {
    Object.assign(this, init);
  }
}
