import { combineCSSClasses } from "@credasinc/ctip-ui/utils/html";
import { i18n } from "@lingui/core";
import { useState } from "react";
import style from "./tags-input.module.scss";

interface TagsInputProps {
  readonly?: boolean;
  defaultTags?: string[];
  className?: string;
  addBtn?: boolean;
  tagList?: string[];
}
const TagsInput = ({
  readonly,
  defaultTags,
  className,
  addBtn,
  tagList,
}: TagsInputProps) => {
  const uniqueKey = `tags-${+new Date()}`;

  const [tags, setTags] = useState(defaultTags || ["test"]);
  const handleKeyDown = (event: any): any => {
    if (event.key === ",") {
      if (event.target.value.trim()) {
        setTags([...tags, event.target.value]);
      }

      setTimeout(() => {
        event.target.value = "";
      }, 10);
    }
  };

  const handleRemoveItemClick = (index: number) => () => {
    const newValue = tags;
    newValue.splice(index, 1);
    setTags([...newValue]);
  };

  return (
    <div
      data-testid="tags-input"
      className={combineCSSClasses(
        style["input-tags-container"],
        className || "",
        tagList?.length ? style["with-list"] : ""
      )}
    >
      {tagList?.length ? (
        <datalist id="availableTags" data-testid="taglist">
          {tagList.map((tag: string) => (
            <option value={tag} key={`tag-list-${tag}`} />
          ))}
        </datalist>
      ) : (
        <></>
      )}
      {tags.map((tag, index) => (
        <div
          className={style["tags-item"]}
          key={`${uniqueKey}-${index}`}
          data-testid="tag"
        >
          {tag}
          <button
            className={combineCSSClasses("btn", style["remove-item-btn"])}
            onClick={handleRemoveItemClick(index)}
          >
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 1.41562L6.41563 5L10 8.58438L8.58438 10L5 6.41563L1.41562 10L0 8.58438L3.58437 5L0 1.41562L1.41562 0L5 3.58437L8.58438 0L10 1.41562Z"
                fill="#495057"
              />
            </svg>
          </button>
        </div>
      ))}
      {readonly ? (
        ""
      ) : (
        <input
          type="text"
          data-testid="readonly-input"
          className={combineCSSClasses(style["input-tag"])}
          onKeyDown={handleKeyDown}
          list="availableTags"
        />
      )}
      {addBtn ? (
        <div
          className={style["tags-item"]}
          key={`${uniqueKey}-add-tag`}
          data-testid="addBtn"
        >
          <button className={combineCSSClasses("btn", style["add-item-btn"])}>
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.75 3.25V0.25H3.25V3.25H0.25V4.75H3.25V7.75H4.75V4.75H7.75V3.25H4.75Z"
                fill="#495057"
              />
            </svg>
          </button>
          <b>{i18n._(/*i18n*/ "Add tag")}</b>
        </div>
      ) : (
        ""
      )}
      {tagList?.length ? (
        <span className={style["tag-list-icon"]} data-testid="extra">
          <svg
            width="8"
            height="6"
            viewBox="0 0 8 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 6L0 0H8L4 6Z" fill="#495057" />
          </svg>
        </span>
      ) : (
        ""
      )}
    </div>
  );
};

export default TagsInput;
