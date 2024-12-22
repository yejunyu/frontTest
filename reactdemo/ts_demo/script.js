"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const url = "https://api.thecatapi.com/v1/images/search";
const button = document.querySelector("button");
const tableBody = document.querySelector("#tbody");
class Cat {
    constructor(id, url, height, width) {
        this.id = id;
        this.url = url;
        this.height = height;
        this.width = width;
    }
}
class WebDisplay {
    static removeData(target) {
        const td = target.parentElement;
        const tr = td.parentElement;
        tr.remove();
    }
    static addData(data) {
        const cat = new Cat(data.id, data.url, data.height, data.width);
        const tableRow = document.createElement("tr");
        tableRow.innerHTML = `
        <td>${cat.id}</td>
        <td><img src="${cat.url}" alt="cat" /></td>
        <td>${cat.height.toString()}</td>
        <td>${cat.width.toString()}</td>
        <td>${cat.url}</td>
        <td><a href="#">X</></td>
      `;
        tableBody === null || tableBody === void 0 ? void 0 : tableBody.appendChild(tableRow);
    }
}
function fetchData(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url);
        const data = yield response.json();
        return data;
    });
}
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const json = yield fetchData(url);
            const data = json[0];
            WebDisplay.addData(data);
        }
        catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }
            else {
                console.log("Unknown error");
            }
            console.log(error);
        }
    });
}
button === null || button === void 0 ? void 0 : button.addEventListener("click", () => {
    getData();
});
tableBody === null || tableBody === void 0 ? void 0 : tableBody.addEventListener("click", (e) => {
    const target = e.target;
    console.log(target.tagName);
    if (target.tagName == "A") {
        WebDisplay.removeData(target);
    }
});
