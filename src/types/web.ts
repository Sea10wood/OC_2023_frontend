import { ButtonProps } from "@mui/material";
import React from "react";
import { Asset, GetTag } from "./common";

export type TweetButtonProps = {
    text: string;
    size: "small" | "medium" | "large";
};

export type ScrollButtonProps = {
    text: string;
    color: ButtonProps["color"];
};

export type FooterButtonType = {
    name: string;
    iconElement: React.ReactNode;
    linkPath: string;
};
export type MarkdownViewerProps = {
    rawText: string;
};

export type LinkRendererProps = {
    href: string | undefined;
    children: React.ReactNode;
};
export type AssetsProps = {
    isOpen: boolean;
    closeModal: () => void;
    assets: Asset[];
};

export type SearchPopoverProps = {
    isOpen: boolean;
    closePopover: () => void;
    anchorEl: HTMLButtonElement | null;
};
export type DebounceExecuteProps = {
    keyword: string;
    timeOutMillSec: number;
};
export type SelectedTagsProps = {
    selectedTag: number;
    tagSuggest: GetTag[];
    searchTag: GetTag[];
    setSearchTag: React.Dispatch<React.SetStateAction<GetTag[]>>;
};
export type SuggestTagsProps = {
    searchTag: GetTag[];
    setSearchTag: React.Dispatch<React.SetStateAction<GetTag[]>>;
};
export type CategorySelectProps = {
    handleCheckboxChange: (label: string) => void;
};
