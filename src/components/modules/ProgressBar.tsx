import React from "react";

export const ProgressBarThreeStages = (props: { progress: 0 | 1 | 2 }) => {
  const { progress } = props;
  type progressCSSType = {
    contentTarget1: "progress-content-fill" | "progress-content-active" | "";
    contentTarget2: "progress-content-fill" | "progress-content-active" | "";
    contentTarget3: "progress-content-fill" | "progress-content-active" | "";
    spanTarget1: "progress-bar-fill" | "progress-bar-active" | "";
    spanTarget2: "progress-bar-fill" | "progress-bar-active" | "";
    textTarget1: "text-black" | "text-primary-50" | "animate-text-progress";
    textTarget2: "text-black" | "text-primary-50" | "animate-text-progress";
    textTarget3: "text-black" | "text-primary-50" | "animate-text-progress";
  };
  const ProgressCSS: progressCSSType = {
    contentTarget1: "",
    contentTarget2: "",
    contentTarget3: "",
    spanTarget1: "",
    spanTarget2: "",
    textTarget1: "text-primary-50",
    textTarget2: "text-primary-50",
    textTarget3: "text-primary-50",
  };
  switch (progress) {
    case 0:
      ProgressCSS.contentTarget1 = "progress-content-active";
      ProgressCSS.textTarget1 = "animate-text-progress";
      break;
    case 1:
      ProgressCSS.contentTarget1 = "progress-content-fill";
      ProgressCSS.contentTarget2 = "progress-content-active";
      ProgressCSS.spanTarget1 = "progress-bar-active";
      ProgressCSS.textTarget1 = "text-black";
      ProgressCSS.textTarget2 = "animate-text-progress";
      break;
    case 2:
      ProgressCSS.contentTarget1 = "progress-content-fill";
      ProgressCSS.contentTarget2 = "progress-content-fill";
      ProgressCSS.contentTarget3 = "progress-content-active";
      ProgressCSS.spanTarget1 = "progress-bar-fill";
      ProgressCSS.spanTarget2 = "progress-bar-active";
      ProgressCSS.textTarget1 = "text-black";
      ProgressCSS.textTarget2 = "text-black";
      ProgressCSS.textTarget3 = "animate-text-progress";
      break;
  }

  return (
    <>
      <div className="relative inline-flex w-auto flex-row justify-center">
        <span
          className={
            "absolute top-8 left-8 z-0 h-[5px] w-1/3 bg-primary-50 " +
            ProgressCSS.spanTarget1
          }
        />
        <span
          className={
            "absolute top-8 right-8 z-0 h-[5px] w-1/3 bg-primary-50 " +
            ProgressCSS.spanTarget2
          }
        />
        <div className="z-10 flex w-28 flex-col items-center gap-2">
          <div
            className={
              "relative inline-flex h-16 w-16 flex-col items-center justify-center overflow-hidden rounded-full bg-primary-50 text-3xl text-white " +
              ProgressCSS.contentTarget1
            }
          >
            <span className="z-10">1</span>
          </div>
          <span
            className={
              "flex flex-col items-center text-sm font-bold transition-all " +
              ProgressCSS.textTarget1
            }
          >
            <li className="list-none">アンケート</li>
          </span>
        </div>
        <div className="z-10 flex w-28 flex-col items-center gap-2">
          <div
            className={
              "relative inline-flex h-16 w-16 flex-col items-center justify-center overflow-hidden rounded-full bg-primary-50 text-3xl text-white " +
              ProgressCSS.contentTarget2
            }
          >
            <span className="z-10">2</span>
          </div>
          <span
            className={
              "flex flex-col items-center text-sm font-bold transition-all " +
              ProgressCSS.textTarget2
            }
          >
            内容確認
          </span>
        </div>
        <div className="z-10 flex w-28 flex-col items-center gap-2">
          <div
            className={
              "relative inline-flex h-16 w-16 flex-col items-center justify-center overflow-hidden rounded-full bg-primary-50 text-3xl text-white " +
              ProgressCSS.contentTarget3
            }
          >
            <span className="z-10">3</span>
          </div>
          <span
            className={
              "flex flex-col items-center text-sm font-bold transition-all " +
              ProgressCSS.textTarget3
            }
          >
            完了
          </span>
        </div>
      </div>
    </>
  );
};

export const ProgressBarFourStages = (props: { progress: 0 | 1 | 2 | 3 }) => {
  const { progress } = props;
  type progressCSSType = {
    contentTarget1: "progress-content-fill" | "progress-content-active" | "";
    contentTarget2: "progress-content-fill" | "progress-content-active" | "";
    contentTarget3: "progress-content-fill" | "progress-content-active" | "";
    contentTarget4: "progress-content-fill" | "progress-content-active" | "";
    spanTarget1: "progress-bar-fill" | "progress-bar-active" | "";
    spanTarget2: "progress-bar-fill" | "progress-bar-active" | "";
    spanTarget3: "progress-bar-fill" | "progress-bar-active" | "";
    textTarget1: "text-black" | "text-primary-50" | "animate-text-progress";
    textTarget2: "text-black" | "text-primary-50" | "animate-text-progress";
    textTarget3: "text-black" | "text-primary-50" | "animate-text-progress";
    textTarget4: "text-black" | "text-primary-50" | "animate-text-progress";
  };
  const ProgressCSS: progressCSSType = {
    contentTarget1: "",
    contentTarget2: "",
    contentTarget3: "",
    contentTarget4: "",
    spanTarget1: "",
    spanTarget2: "",
    spanTarget3: "",
    textTarget1: "text-primary-50",
    textTarget2: "text-primary-50",
    textTarget3: "text-primary-50",
    textTarget4: "text-primary-50",
  };
  switch (progress) {
    case 0:
      ProgressCSS.contentTarget1 = "progress-content-active";
      ProgressCSS.textTarget1 = "animate-text-progress";
      break;
    case 1:
      ProgressCSS.contentTarget1 = "progress-content-fill";
      ProgressCSS.contentTarget2 = "progress-content-active";
      ProgressCSS.spanTarget1 = "progress-bar-active";
      ProgressCSS.textTarget1 = "text-black";
      ProgressCSS.textTarget2 = "animate-text-progress";
      break;
    case 2:
      ProgressCSS.contentTarget1 = "progress-content-fill";
      ProgressCSS.contentTarget2 = "progress-content-fill";
      ProgressCSS.contentTarget3 = "progress-content-active";
      ProgressCSS.spanTarget1 = "progress-bar-fill";
      ProgressCSS.spanTarget2 = "progress-bar-active";
      ProgressCSS.textTarget1 = "text-black";
      ProgressCSS.textTarget2 = "text-black";
      ProgressCSS.textTarget3 = "animate-text-progress";
      break;
    case 3:
      ProgressCSS.contentTarget1 = "progress-content-fill";
      ProgressCSS.contentTarget2 = "progress-content-fill";
      ProgressCSS.contentTarget3 = "progress-content-fill";
      ProgressCSS.contentTarget4 = "progress-content-active";
      ProgressCSS.spanTarget1 = "progress-bar-fill";
      ProgressCSS.spanTarget2 = "progress-bar-fill";
      ProgressCSS.spanTarget3 = "progress-bar-active";
      ProgressCSS.textTarget1 = "text-black";
      ProgressCSS.textTarget2 = "text-black";
      ProgressCSS.textTarget3 = "text-black";
      ProgressCSS.textTarget4 = "animate-text-progress";
      break;
  }

  return (
    <>
      <div className="relative inline-flex w-auto flex-row justify-center gap-5">
        <span
          className={
            "absolute top-8 left-8 z-0 h-[5px] w-1/4 bg-primary-50 " +
            ProgressCSS.spanTarget1
          }
        />
        <span
          className={
            "absolute top-8 z-0 h-[5px] w-1/4 bg-primary-50 " +
            ProgressCSS.spanTarget2
          }
        />
        <span
          className={
            "absolute right-8 top-8 z-0 h-[5px] w-1/4 bg-primary-50 " +
            ProgressCSS.spanTarget3
          }
        />
        <div className="z-10 flex w-28 flex-col items-center gap-2">
          <div
            className={
              "relative inline-flex h-16 w-16 flex-col items-center justify-center overflow-hidden rounded-full bg-primary-50 text-3xl text-white " +
              ProgressCSS.contentTarget1
            }
          >
            <span className="z-10">1</span>
          </div>
          <span
            className={
              "flex flex-col items-center text-sm font-bold transition-all " +
              ProgressCSS.textTarget1
            }
          >
            <li className="list-none">カスタマイズ</li>
          </span>
        </div>
        <div className="z-10 flex w-28 flex-col items-center gap-2">
          <div
            className={
              "relative inline-flex h-16 w-16 flex-col items-center justify-center overflow-hidden rounded-full bg-primary-50 text-3xl text-white " +
              ProgressCSS.contentTarget2
            }
          >
            <span className="z-10">2</span>
          </div>
          <span
            className={
              "flex flex-col items-center text-sm font-bold transition-all " +
              ProgressCSS.textTarget2
            }
          >
            決済・請求先
          </span>
        </div>
        <div className="z-10 flex w-28 flex-col items-center gap-2">
          <div
            className={
              "relative inline-flex h-16 w-16 flex-col items-center justify-center overflow-hidden rounded-full bg-primary-50 text-3xl text-white " +
              ProgressCSS.contentTarget3
            }
          >
            <span className="z-10">3</span>
          </div>
          <span
            className={
              "flex flex-col items-center text-sm font-bold transition-all " +
              ProgressCSS.textTarget3
            }
          >
            内容確認
          </span>
        </div>
        <div className="z-10 flex w-28 flex-col items-center gap-2">
          <div
            className={
              "relative inline-flex h-16 w-16 flex-col items-center justify-center overflow-hidden rounded-full bg-primary-50 text-3xl text-white " +
              ProgressCSS.contentTarget4
            }
          >
            <span className="z-10">4</span>
          </div>
          <span
            className={
              "flex flex-col items-center text-sm font-bold transition-all " +
              ProgressCSS.textTarget4
            }
          >
            完了
          </span>
        </div>
      </div>
    </>
  );
};
