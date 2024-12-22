const url = "https://api.thecatapi.com/v1/images/search";

const button = document.querySelector("button");
const tableBody: HTMLTableElement | null = document.querySelector("#tbody");

interface CatType {
  id: string;
  url: string;
  height: number;
  width: number;
}

class Cat implements CatType {
  id: string;
  url: string;
  height: number;
  width: number;
  constructor(id: string, url: string, height: number, width: number) {
    this.id = id;
    this.url = url;
    this.height = height;
    this.width = width;
  }
}

class WebDisplay {
  static removeData(target: HTMLAnchorElement) {
    const td = target.parentElement as HTMLTableCellElement;
    const tr = td.parentElement as HTMLTableRowElement;
    tr.remove();
  }
  public static addData(data: CatType): void {
    const cat: Cat = new Cat(data.id, data.url, data.height, data.width);
    const tableRow: HTMLTableRowElement = document.createElement("tr");
    tableRow.innerHTML = `
        <td>${cat.id}</td>
        <td><img src="${cat.url}" alt="cat" /></td>
        <td>${cat.height.toString()}</td>
        <td>${cat.width.toString()}</td>
        <td>${cat.url}</td>
        <td><a href="#">X</></td>
      `;

    tableBody?.appendChild(tableRow);
  }
}

async function fetchData<T>(url: string): Promise<T> {
  const response: Response = await fetch(url);
  const data: Promise<T> = await response.json();
  return data;
}

async function getData(): Promise<void> {
  try {
    const json = await fetchData<CatType[]>(url);
    const data: CatType = json[0];
    WebDisplay.addData(data);
  } catch (error: Error | unknown) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log("Unknown error");
    }
    console.log(error);
  }
}

button?.addEventListener<"click">("click", () => {
  getData();
});

tableBody?.addEventListener<"click">("click", (e: Event) => {
  const target = e.target as HTMLAnchorElement;
  console.log(target.tagName);

  if (target.tagName == "A") {
    WebDisplay.removeData(target);
  }
});
