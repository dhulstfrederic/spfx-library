export class CreateLibraryLibrary {   //classname
  public name(): string {
    return 'CreateLibraryLibrary';   //classname
  }

  public getCurrentTime(): string {
    let currentDate : Date;
    let str: string;

    currentDate = new Date();
    str = "<br>Today date is : "+currentDate.toDateString();
    str += "<br>Today time is : "+currentDate.toTimeString();

    return (str);
  }
}
