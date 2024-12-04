"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var link_1 = require("next/link");
var next_cloudinary_1 = require("next-cloudinary");
var First = function () {
    var onClickHandleMale = function () {
        console.log("clicked male");
    };
    var onClickHandleFemale = function () {
        console.log("clicked female");
    };
    return (react_1["default"].createElement("div", { className: "min-h-[100vh] w-[100vw] flex-1 items-center justify-center" },
        react_1["default"].createElement("div", { className: "flex-col items-center justify-center" },
            react_1["default"].createElement("div", { className: "flex-col items-center justify-center text-center" },
                react_1["default"].createElement("h1", { className: "font-sans text-4xl font-bold tracking-widest " }, "WEIGHT LOSS PLAN"),
                react_1["default"].createElement("div", { className: "text-gray-400 text-xl mb-7" },
                    "ACCORDING TO YOUR ",
                    react_1["default"].createElement("b", null, "GENDER")),
                react_1["default"].createElement("div", { className: "mb-7" },
                    react_1["default"].createElement("b", null, "1 MINUTE"),
                    " QUIZ"),
                react_1["default"].createElement("p", { className: "text-gray-400 text-xl font-bold md:hidden" }, "CLICK ANY")),
            react_1["default"].createElement("div", { className: "md:flex  gap-4 w-[100%] self-center justify-center mb-10 items-center " },
                react_1["default"].createElement(link_1["default"], { href: "/quiz" },
                    react_1["default"].createElement(next_cloudinary_1.CldImage, { width: 500, height: 500, src: "https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/l81buhv4nmiilj1x5bjr", alt: "male_img", className: "sm:w-[300px]   lg:w-[440px]  h-full  lg:hover:transition transform duration-500 hover:scale-90 hover:opacity-75 cursor-pointer ", onClick: onClickHandleMale })),
                react_1["default"].createElement(link_1["default"], { href: "/quiz-female" },
                    react_1["default"].createElement(next_cloudinary_1.CldImage, { width: 500, height: 500, className: "sm:w-[300px]  lg:w-[440px] h-full  lg:hover:transition transform duration-500 hover:scale-90 hover:opacity-75   cursor-pointer", src: "https://res.cloudinary.com/dedwnkpv4/image/upload/f_auto,q_auto/v1/better-health/hnhmlvzcii8w5qhorhmi", alt: "female_img", onClick: onClickHandleFemale }))))));
};
exports["default"] = First;
